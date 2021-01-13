streamElements = {} # keep track of DOM elements for each stream

# Whenever updateViews are involved, parameters passed through will always have:
# TBPublisher constructor, TBUpdateObjects, TBSubscriber constructor
# [id, top, left, width, height, zIndex, ... ]

#
# Helper methods
#
getPosition = (pubDiv) ->
  # Get the position of element
  if !pubDiv then return {}
  computedStyle = if window.getComputedStyle then getComputedStyle(pubDiv, null) else {}
  width = pubDiv.offsetWidth
  height = pubDiv.offsetHeight
  curtop = pubDiv.offsetTop
  curleft = pubDiv.offsetLeft
  while(pubDiv = pubDiv.offsetParent)
    curleft += pubDiv.offsetLeft
    curtop += pubDiv.offsetTop
  return {
    top:curtop
    left:curleft
    width:width
    height:height
  }

replaceWithVideoStream = (element, streamId, properties) ->
  typeClass = if streamId == PublisherStreamId then PublisherTypeClass else SubscriberTypeClass
  if (properties.insertMode == "replace")
    newElement = element
  else
    newElement = document.createElement( "div" )
  newElement.setAttribute( "class", "OT_root #{typeClass}" )
  newElement.setAttribute( "data-streamid", streamId )
  newElement.setAttribute( "data-insertMode", properties.insertMode )
  newElement.style.width = properties.width+"px"
  newElement.style.height = properties.height+"px"
  newElement.style.overflow = "hidden"
  newElement.style['background-color'] = "#000000"
  streamElements[ streamId ] = newElement

  internalDiv = document.createElement( "div" )
  internalDiv.setAttribute( "class", VideoContainerClass)
  internalDiv.style.width = "100%"
  internalDiv.style.height = "100%"
  internalDiv.style.left = "0px"
  internalDiv.style.top = "0px"

  videoElement = document.createElement( "video" )
  videoElement.style.width = "100%"
  videoElement.style.height = "100%"
  # todo: js change styles or append css stylesheets? Concern: users will not be able to change via css

  internalDiv.appendChild( videoElement )
  newElement.appendChild( internalDiv )

  if (properties.insertMode == "append")
    element.appendChild(newElement)
  if (properties.insertMode == "before")
    element.parentNode.insertBefore(newElement, element)
  if (properties.insertMode == "after")
    element.parentNode.insertBefore(newElement, element.nextSibling)
  return newElement

TBError = (error) ->
  console.log("Error: ", error)

TBSuccess = ->
  console.log("success")

OTPublisherError = (error) ->
  if error == "permission denied"
    OTReplacePublisher()
    TBError("Camera or Audio Permission Denied")
  else
    TBError(error)

TBUpdateObjects = ()->
  console.log("JS: Objects being updated in TBUpdateObjects")
  objects = document.getElementsByClassName('OT_root')

  ratios = TBGetScreenRatios()

  for e in objects
    console.log("JS: Object updated")
    streamId = e.dataset.streamid
    console.log("JS sessionId: " + streamId )
    position = getPosition(e)
    Cordova.exec(TBSuccess, TBError, OTPlugin, "updateView", [streamId, position.top, position.left, position.width, position.height, TBGetZIndex(e), ratios.widthRatio, ratios.heightRatio] )
  return
TBGenerateDomHelper = ->
  domId = "PubSub" + Date.now()
  div = document.createElement('div')
  div.setAttribute( 'id', domId )
  document.body.appendChild(div)
  return domId

TBGetZIndex = (ele) ->
  while( ele? )
    val = document.defaultView.getComputedStyle(ele,null).getPropertyValue('z-index')
    if ( parseInt(val) )
      return val
    ele = ele.offsetParent
  return 0

TBGetScreenRatios = ()->
    # Ratio between browser window size and viewport size
    return {
        widthRatio: window.outerWidth / window.innerWidth,
        heightRatio: window.outerHeight / window.innerHeight
    }

OTReplacePublisher = ()->
    # replace publisher because permission denied
    elements = document.getElementsByClassName('OT_root OT_publisher');
    for el in elements
      elAttribute = el.getAttribute('data-streamid')
      if elAttribute == "TBPublisher"
        element = el
        break
    attributes = ['style', 'data-streamid', 'class']
    elementChildren = element.childNodes
    element.removeAttribute attribute for attribute in attributes
    for childElement in elementChildren
      childClass = childElement.getAttribute 'class'
      if childClass == 'OT_video-container'
        element.removeChild childElement
        break
    return

pdebug = (msg, data) ->
  console.log "JS Lib: #{msg} - ", data
