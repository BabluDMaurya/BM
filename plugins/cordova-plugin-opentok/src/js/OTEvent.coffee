class TBEvent
  constructor: (type, cancelable) ->
    @type = type
    @cancelable = if cancelable != undefined then cancelable else true
    @_defaultPrevented = false
    return
  isDefaultPrevented: =>
    return @_defaultPrevented
  preventDefault: =>
    if(@cancelable)
        @_defaultPrevented = true
    else
        console.log("Event.preventDefault: Trying to prevent default on an Event that isn't cancelable")
    return