# Pong
buffer = new ArrayBuffer(3)
view = new DataView(buffer)

exports.build = ->
  type = 'p'
  view.setUint8 0, 0

  ## Append last message date
  view.setUint8 1, global.Server.getElapsedTime()

  ## Append message type
  view.setUint8 2, type.charCodeAt(0)

  return buffer