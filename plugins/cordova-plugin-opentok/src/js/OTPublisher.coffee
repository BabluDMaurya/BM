# Publisher Object:
#   Properties:
#     id (String) — The ID of the DOM element through which the Publisher stream is displayed
#     stream - The Stream object corresponding to the stream of the publisher
#     session (Session) — The Session to which the Publisher is publishing a stream. If the Publisher is not publishing a stream to a Session, this property is set to null.
#     replaceElementId (String) — The ID of the DOM element that was replaced when the Publisher video stream was inserted.
#   Methods: 
#     destroy():Publisher - not yet implemented
#     getImgData(callback)
#     getStyle() : Object - not yet implemented
#     off( type, listener )
#     on( type, listener )
#     publishAudio(Boolean) : publisher - change publishing state for Audio
#     publishVideo(Boolean) : publisher - change publishing state for Video
#     setStyle( style, value ) : publisher - not yet implemented
#
class TBPublisher
  constructor: (one, two) ->
    @sanitizeInputs(one, two)
    pdebug "creating publisher", {}
    position = getPosition(@pubElement)
    name=""
    publishAudio="true"
    publishVideo="true"
    cameraName = "front"
    zIndex = TBGetZIndex(@pubElement)
    ratios = TBGetScreenRatios()
    audioFallbackEnabled = "true"
    audioBitrate = 40000
    audioSource = "true"
    videoSource = "true"
    frameRate = 30
    resolution = "640X480"
    insertMode = "replace"
    if @properties?
      width = @properties.width ? position.width
      height = @properties.height ? position.height
      name = @properties.name ? ""
      cameraName = @properties.cameraName ? "front"
      audioFallbackEnabled = @properties.audioFallbackEnabled ? audioFallbackEnabled
      audioBitrate = @properties.audioBitrate ? audioBitrate
      audioSource = @properties.audioSource ? audioSource
      videoSource = @properties.videoSource ? videoSource
      frameRate = @properties.frameRate ? frameRate
      resolution = @properties.resolution ? resolution
      if(@properties.publishAudio? and @properties.publishAudio==false)
        publishAudio="false"
      if(@properties.publishVideo? and @properties.publishVideo==false)
        publishVideo="false"
      if(@properties.audioFallbackEnabled? and @properties.audioFallbackEnabled==false)
        audioFallbackEnabled="false"
      if(@properties.audioSource? || @properties.audioSource==false)
        audioSource="false"
      if(@properties.videoSource? || @properties.videoSource==false)
        videoSource="false"
      insertMode = @properties.insertMode ? insertMode
    if (not width?) or width == 0 or (not height?) or height==0
      width = DefaultWidth
      height = DefaultHeight
    replaceWithVideoStream(@pubElement, PublisherStreamId, {width:width, height:height, insertMode:insertMode})
    position = getPosition(@pubElement)
    TBUpdateObjects()
    OT.getHelper().eventing(@)
    Cordova.exec(TBSuccess, TBError, OTPlugin, "initPublisher", [name, position.top, position.left, width, height, zIndex, publishAudio, publishVideo, cameraName, ratios.widthRatio, ratios.heightRatio, audioFallbackEnabled, audioBitrate, audioSource, videoSource, frameRate, resolution] )
    Cordova.exec(@eventReceived, TBSuccess, OTPlugin, "addEvent", ["publisherEvents"] )
  setSession: (session) =>
    @session = session
  eventReceived: (response) =>
    @[response.eventType](response.data)
  streamCreated: (event) =>
    @stream = new TBStream( event.stream, @session.sessionConnected )
    streamEvent = new TBEvent("streamCreated")
    streamEvent.stream = @stream
    @dispatchEvent(streamEvent)
    return @
  streamDestroyed: (event) =>
    streamEvent = new TBEvent("streamDestroyed")
    streamEvent.stream = @stream
    streamEvent.reason = "clientDisconnected"
    @dispatchEvent(streamEvent)
    # remove stream DOM?
    return @

  removePublisherElement: =>
    @pubElement.parentNode.removeChild(@pubElement)
    @pubElement = false

  destroy: ->
    if(@pubElement)
      Cordova.exec( @removePublisherElement, TBError, OTPlugin, "destroyPublisher", [])
  getImgData: (callback) ->
    errorCb = (error) -> callback(error)
    successCb = (img) -> callback(null, img)
    Cordova.exec(successCb, errorCb, OTPlugin, "getImgData", [PublisherStreamId]);
    return @
  getStyle: ->
    return {}
  publishAudio: (state) ->
    @publishMedia( "publishAudio", state )
    return @
  publishVideo: (state) ->
    @publishMedia( "publishVideo", state )
    return @
  setCameraPosition: (cameraPosition) ->
    pdebug("setting camera position", cameraPosition: cameraPosition)
    Cordova.exec(TBSuccess, TBError, OTPlugin, "setCameraPosition", [cameraPosition])
    return @
  setStyle: (style, value ) ->
    return @
  audioLevelUpdated: (event) ->
    streamEvent = new TBEvent("audioLevelUpdated")
    streamEvent.audioLevel = event.audioLevel
    @dispatchEvent(streamEvent)
    return @ 

  publishMedia: (media, state) ->
    if media not in ["publishAudio", "publishVideo"] then return
    publishState = "true"
    if state? and ( state == false or state == "false" )
      publishState = "false"
    pdebug "setting publishstate", {media: media, publishState: publishState}
    Cordova.exec(TBSuccess, TBError, OTPlugin, media, [publishState] )
  sanitizeInputs: (one, two) ->
    if( two? )
      # all 2 optional properties present: domId, properties
      if one instanceof Element
        @pubElement = one
        @domId = @pubElement.id
      else
        @domId = one
        @pubElement = document.getElementById(one)
      @properties = two
    else if( one? )
      # only 1 property is present domId || properties
      if one instanceof Element
        @pubElement = one
        @domId = @pubElement.id
      else if( typeof(one) == "object" )
        @properties = one
      else
        @domId = one
        @pubElement = document.getElementById(one)
    @properties = if( @properties and typeof( @properties == "object" )) then @properties else {}
    # if domId does NOT exists and an element is provided, create a unique domId
    if (!@domId and @pubElement)
      @domId = "PubSub" + Date.now();
      @pubElement.setAttribute('id', @domId)
    # if domId exists but properties width or height is not specified, set properties
    if( @domId and @pubElement )
      if !@properties.width or !@properties.height
        console.log "domId exists but properties width or height is not specified"
        position = getPosition( @pubElement )
        console.log " width: #{position.width} and height: #{position.height} for domId #{@domId}, and top: #{position.top}, left: #{position.left}"
        if position.width > 0 and position.height > 0
          @properties.width = position.width
          @properties.height = position.height
    else
      @domId = TBGenerateDomHelper()
      @pubElement = document.getElementById(@domId)
    return @