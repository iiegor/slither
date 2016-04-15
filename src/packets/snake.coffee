# Create snake
buffer = new ArrayBuffer(26)
view = new DataView(buffer)

## Append last client message
view.setUint8 0, 0
view.setUint8 1, global.Server.getElapsedTime()

## Append message type
type = 's'
view.setUint8 2, type.charCodeAt(0)

exports.buffer = buffer
