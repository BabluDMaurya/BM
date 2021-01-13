# Subscriber Object:
#   Properties:
#     id (string) - dom id of the subscriber
#     stream (Stream) - stream to which you are subscribing
#   Methods: 
#     getAudioVolume()
#     getImgData(callback)
#     getStyle() : Objects
#     off( type, listener ) : objects
#     on( type, listener ) : objects
#     setAudioVolume( value ) : subscriber
#     setStyle( style, value ) : subscriber
#     subscribeToAudio( value ) : subscriber
#     subscribeToVideo( value ) : subscriber
class TBSubscriber
  getAudioVolume: ->
    return 0
  getImgData: (callback) ->
    errorCb = (error) -> callback(error)
    successCb = (img) -> callback(null, img)
    Cordova.exec(successCb, errorCb, OTPlugin, "getImgData", [this.streamId]);
    return @
  getStyle: ->
    return {}
  setAudioVolume:(value) ->
    return @
  setStyle: (style, value) ->
    return @
  off: (event, handler) ->
    return @
  on: (event, handler) ->
    return @
  subscribeToAudio: (value) ->
    state = "true"
    if value? and ( value == false or value == "false" )
      state = "false"
    Cordova.exec(TBSuccess, TBError, OTPlugin, "subscribeToAudio", [@streamId, state] );
    return @
  subscribeToVideo: (value) ->
    state = "true"
    if value? and ( value == false or value == "false" )
      state = "false"
    Cordova.exec(TBSuccess, TBError, OTPlugin, "subscribeToVideo", [@streamId, state] );
    return @

  constructor: (stream, divObject, properties) ->
    if divObject instanceof Element
      @element = divObject
      @id = @element.id
    else
      @id = divObject
      @element = document.getElementById(divObject)

    @streamId = stream.streamId
    @stream = stream
    if(properties? && properties.width=="100%" && properties.height == "100%")
      @element.style.width="100%"
      @element.style.height="100%"
      properties.width = ""
      properties.height = ""
    divPosition = getPosition(@element)
    subscribeToVideo="true"
    zIndex = TBGetZIndex(@element)
    insertMode = "replace"
    if(properties?)
      width = properties.width || divPosition.width
      height = properties.height || divPosition.height
      name = properties.name ? ""
      subscribeToVideo = "true"
      subscribeToAudio = "true"
      if(properties.subscribeToVideo? and properties.subscribeToVideo == false)
        subscribeToVideo="false"
      if(properties.subscribeToAudio? and properties.subscribeToAudio == false)
        subscribeToAudio="false"
      insertMode = properties.insertMode ? insertMode
    if (not width?) or width == 0 or (not height?) or height==0
      width = DefaultWidth
      height = DefaultHeight
    obj = replaceWithVideoStream(@element, stream.streamId, {width:width, height:height, insertMode:insertMode})
    position = getPosition(@element)
    ratios = TBGetScreenRatios()
    OT.getHelper().eventing(@)
    Cordova.exec(TBSuccess, TBError, OTPlugin, "subscribe", [stream.streamId, position.top, position.left, width, height, zIndex, subscribeToAudio, subscribeToVideo, ratios.widthRatio, ratios.heightRatio] )
    Cordova.exec(@eventReceived, TBSuccess, OTPlugin, "addEvent", ["subscriberEvents"] )
    OT.updateViews()
  eventReceived: (response) =>
    @[response.eventType](response.data)
  connected: (event) =>
    streamEvent = new TBEvent("connected")
    streamEvent.stream = event.streamId
    @dispatchEvent(streamEvent)
    return @
  disconnected: (event) =>
    streamEvent = new TBEvent("disconnected")
    streamEvent.stream = event.streamId
    @dispatchEvent(streamEvent)
    return @
  videoDataReceived: (event) =>
    streamEvent = new TBEvent("videoDataReceived")
    @dispatchEvent(streamEvent)
    return @
  videoDisabled: (event) =>
    streamEvent = new TBEvent("videoDisabled")
    streamEvent.reason = event.reason
    @dispatchEvent(streamEvent)
    return @
  videoDisabledWarning: (event) =>
    streamEvent = new TBEvent("videoDisabledWarning")
    @dispatchEvent(streamEvent)
    return @
  videoDisabledWarningLifted: (event) =>
    streamEvent = new TBEvent("videoDisabledWarningLifted")
    @dispatchEvent(streamEvent)
    return @
  videoEnabled: (event) =>
    streamEvent = new TBEvent("videoEnabled")
    streamEvent.reason = event.reason
    @dispatchEvent(streamEvent)
    return @
  audioLevelUpdated: (event) =>
    streamEvent = new TBEvent("audioLevelUpdated")
    streamEvent.audioLevel = event.audioLevel
    @dispatchEvent(streamEvent)
    return @

  # deprecating
  removeEventListener: (event, listener) ->
    return @
