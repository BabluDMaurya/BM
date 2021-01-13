 # Session Object:
#   Properties:
#     capabilities ( Capabilities ) - A Capabilities object includes info about capabilities of the client. All properties of capabilities object are undefined until connected to a session
#     connection ( Connection ) - connection property is only available once session object dispatches sessionConnected event
#     sessionId ( String ) - session Id for this session
#   Methods: 
#     connect( token, completionHandler )
#     disconnect()
#     forceDisconnect( connection ) - forces a remote connection to leave the session
#     forceUnpublish( stream ) - forces publisher of the spicified stream to stop publishing the stream
#     getPublisherForStream( stream ) - returns the local publisher object for a given stream
#     getSubscribersForStream( stream ) - returns array of local subscriber objects for a given stream
#     off( type, listener ) 
#     on( type, listener ) 
#     publish( publisher ) - starts publishing
#     signal( signal, completionHandler)
#     subscribe( stream, targetElement, properties ) : subscriber
#     unpublish( publisher )
#     unsubscribe( subscriber )
class TBSession
  connect: (@token, connectCompletionCallback) ->
    if( typeof(connectCompletionCallback) != "function" and connectCompletionCallback? )
      TB.showError( "Session.connect() takes a token and an optional completionHandler" )
      return
    if (connectCompletionCallback?)
      errorCallback = (error) -> connectCompletionCallback(error)
      successCallback = () -> connectCompletionCallback(null)
    Cordova.exec(@eventReceived, TBError, OTPlugin, "addEvent", ["sessionEvents"] )
    Cordova.exec(successCallback, errorCallback, OTPlugin, "connect", [@token] )
    return
  disconnect: () ->
    Cordova.exec(TBSuccess, TBError, OTPlugin, "disconnect", [] )
  forceDisconnect: (connection) ->
    return @
  forceUnpublish: (stream ) ->
    return @
  getPublisherForStream: (stream) ->
    return @
  getSubscribersForStream: (stream) ->
    return @
  publish: (divObject, properties) =>
    if( @alreadyPublishing )
      pdebug("Session is already publishing", {})
      return
    @alreadyPublishing = true
    @publisher = new TBPublisher(divObject, properties)
    @publish( @publisher )
  publish: () =>
    if( @alreadyPublishing )
      pdebug("Session is already publishing", {})
      return
    @alreadyPublishing = true
    if(typeof arguments[0] == "object")
      @publisher = arguments[0]
    else
      @publisher = OT.initPublisher(arguments)
    @publisher.setSession(@)
    Cordova.exec(TBSuccess, OTPublisherError, OTPlugin, "publish", [] )
    return @publisher
  signal: (signal, signalCompletionHandler) ->
    # signal payload: [type, data, connection( separated by spaces )]
    type = if signal.type? then signal.type else ""
    data = if signal.data? then signal.data else ""
    to = if signal.to? then signal.to else ""
    to = if typeof(to)=="string" then to else to.connectionId
    Cordova.exec(TBSuccess, TBError, OTPlugin, "signal", [type, data, to] )
    return @
  subscribe: (one, two, three, four) ->
    @subscriberCallbacks = {}
    if( four? )
      # stream,domId, properties, completionHandler
      subscriber = new TBSubscriber(one, two, three)
      @subscriberCallbacks[one.streamId] = four
      @subscribers[one.streamId] = subscriber
      return subscriber
    if( three? )
      # stream, domId, properties || stream, domId, completionHandler || stream, properties, completionHandler
      if( (typeof(two) == "string" || two.nodeType == 1 || two instanceof Element) && typeof(three) == "object" )
        console.log("stream, domId, props")
        subscriber = new TBSubscriber(one, two, three)
        @subscribers[one.streamId] = subscriber
        return subscriber
      if( (typeof(two) == "string" || two.nodeType == 1 || two instanceof Element) && typeof(three) == "function" )
        console.log("stream, domId, completionHandler")
        @subscriberCallbacks[one.streamId]=three
        subscriber = new TBSubscriber(one, two, {})
        @subscribers[one.streamId] = subscriber
        return subscriber
      if(typeof(two) == "object" && typeof(three) == "function" )
        console.log("stream, props, completionHandler")
        @subscriberCallbacks[one.streamId] = three
        domId = TBGenerateDomHelper()
        subscriber = new TBSubscriber( one, domId, two )
        @subscribers[one.streamId] = subscriber
        return subscriber
    if( two? )
      # stream, domId || stream, properties || stream,completionHandler
      if( (typeof(two) == "string" || two.nodeType == 1 || two instanceof Element) )
        subscriber = new TBSubscriber(one, two, {})
        @subscribers[one.streamId] = subscriber
        return subscriber
      if( typeof(two) == "object" )
        domId = TBGenerateDomHelper()
        subscriber = new TBSubscriber(one, domId, two)
        @subscribers[one.streamId] = subscriber
        return subscriber
      if( typeof(two) == "function" )
        @subscriberCallbacks[one.streamId] = two
        domId = TBGenerateDomHelper()
        subscriber = new TBSubscriber(one, domId, {})
        @subscribers[one.streamId] = subscriber
        return subscriber
    # stream
    domId = TBGenerateDomHelper()
    subscriber = new TBSubscriber(one, domId, {})
    @subscribers[one.streamId] = subscriber
    return subscriber
  unpublish:() ->
    @alreadyPublishing = false
    console.log("JS: Unpublish")
    element = @publisher.pubElement
    if(element)
      @resetElement(element)
      TBUpdateObjects()
    return Cordova.exec(TBSuccess, TBError, OTPlugin, "unpublish", [] )
  unsubscribe: (subscriber) ->
    console.log("JS: Unsubscribe")
    elementId = subscriber.streamId
    element = document.getElementById( "TBStreamConnection#{elementId}" )
    console.log("JS: Unsubscribing")
    element = streamElements[ elementId ]
    if(element)
      @resetElement(element)
      delete( streamElements[ elementId ] )
      TBUpdateObjects()
    return Cordova.exec(TBSuccess, TBError, OTPlugin, "unsubscribe", [subscriber.streamId] )

  constructor: (@apiKey, @sessionId) ->
    @apiKey = @apiKey.toString()
    @connections = {}
    @streams = {}
    @subscribers = {}
    @alreadyPublishing = false
    OT.getHelper().eventing(@)
    Cordova.exec(TBSuccess, TBSuccess, OTPlugin, "initSession", [@apiKey, @sessionId] )
  cleanUpDom: ->
    objects = document.getElementsByClassName('OT_root')
    while( objects.length > 0 )
      e = objects[0]
      if e
        @resetElement(e)
      objects = document.getElementsByClassName('OT_root')
  resetElement: (element) =>
    insertMode = element.getAttribute('data-insertMode')
    if (insertMode == "replace")
      attributes = ['style', 'data-streamid', 'class', 'data-insertMode']
      elementChildren = element.childNodes
      element.removeAttribute attribute for attribute in attributes
      for childElement in elementChildren
        childClass = childElement.getAttribute 'class'
        if childClass == 'OT_video-container'
          element.removeChild childElement
          break
     else
       element.parentNode.removeChild(element)
    return
    
  # event listeners
  # todo - other events: connectionCreated, connectionDestroyed, signal?, streamPropertyChanged, signal:type?
  eventReceived: (response) =>
    @[response.eventType](response.data)
  connectionCreated: (event) =>
    connection = new TBConnection( event.connection )
    connectionEvent = new TBEvent("connectionCreated")
    connectionEvent.connection = connection
    @connections[connection.connectionId] = connection
    @dispatchEvent(connectionEvent)
    return @
  connectionDestroyed: (event) =>
    connection = @connections[ event.connection.connectionId ]
    connectionEvent = new TBEvent("connectionDestroyed")
    connectionEvent.connection = connection
    connectionEvent.reason = "clientDisconnected"
    @dispatchEvent(connectionEvent)
    delete( @connections[ connection.connectionId] )
    return @
  sessionConnected: (event) =>
    @dispatchEvent(new TBEvent("sessionConnected"))
    @connection = new TBConnection( event.connection )
    @connections[event.connection.connectionId] = @connection
    event = null
    return @
  sessionDisconnected: (event) =>
    @alreadyPublishing = false
    sessionDisconnectedEvent = new TBEvent("sessionDisconnected")
    sessionDisconnectedEvent.reason = event.reason
    @dispatchEvent(sessionDisconnectedEvent)
    @cleanUpDom()
    return @
  sessionReconnected: (event) =>
    sessionEvent = new TBEvent("sessionReconnected")
    @dispatchEvent(sessionEvent)
    return @
  sessionReconnecting: (event) =>
    sessionEvent = new TBEvent("sessionReconnecting")
    @dispatchEvent(sessionEvent)
    return @
  streamCreated: (event) =>
    stream = new TBStream( event.stream, @connections[event.stream.connectionId] )
    @streams[ stream.streamId ] = stream
    streamEvent = new TBEvent("streamCreated")
    streamEvent.stream = stream
    #streamEvent = new TBEvent( {stream: stream } )
    @dispatchEvent(streamEvent)
    return @
  streamDestroyed: (event) =>
    stream = @streams[event.stream.streamId]
    streamEvent = new TBEvent("streamDestroyed")
    streamEvent.stream = stream
    streamEvent.reason = "clientDisconnected"
    @dispatchEvent(streamEvent)
    # remove stream DOM
    if(stream)
      element = streamElements[ stream.streamId ]
      if(element)
        @resetElement(element)
        delete( streamElements[ stream.streamId ] )
        TBUpdateObjects()
      delete( @streams[ stream.streamId ] )
    return @
  streamPropertyChanged: (event) ->
    stream = new TBStream(event.stream, @connections[event.stream.connectionId])
    if(@publisher && @publisher.stream && @publisher.stream.streamId == stream.streamId)
      @publisher.stream = stream
    else if(@subscribers[stream.streamId])
      @subscribers[stream.streamId].stream = stream
    @streams[stream.streamId] = stream

    streamEvent = new TBEvent("streamPropertyChanged")
    streamEvent.stream = event.stream
    streamEvent.changedProperty = event.changedProperty
    streamEvent.oldValue = event.oldValue
    streamEvent.newValue = event.newValue
    @dispatchEvent(streamEvent)
    return @
  subscribedToStream: (event) =>
    streamId = event.streamId
    callbackFunc = @subscriberCallbacks[streamId]
    if !callbackFunc?
      return
    if event.errorCode?
      error = new OTError(event.errorCode)
      callbackFunc(error)
      return
    else
      callbackFunc()
      return
  signalReceived: (event) =>
    streamEvent = new TBEvent("signal")
    streamEvent.data = event.data
    streamEvent.from = @connections[event.connectionId]
    @dispatchEvent(streamEvent)

    streamEvent = new TBEvent("signal:#{event.type}")
    streamEvent.data = event.data
    streamEvent.from = @connections[event.connectionId]
    @dispatchEvent(streamEvent)
    return @
  archiveStarted: (event) ->
    streamEvent = new TBEvent("archiveStarted")
    streamEvent.id = event.id
    streamEvent.name = event.name
    @dispatchEvent(streamEvent)
    return @
  archiveStopped: (event) ->
    streamEvent = new TBEvent("archiveStopped")
    streamEvent.id = event.id
    @dispatchEvent(streamEvent)
    return @


  # deprecating
  addEventListener: (event, handler) -> # deprecating soon
    @on( event, handler )
    return @
  removeEventListener: ( event, handler ) ->
    @off( event, handler )
    return @
