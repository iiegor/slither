# Create game map
buffer = new ArrayBuffer(26)
view = new DataView(buffer)

## Append message type
type = 'a'
view.setUint8 0, 0
view.setUint8 1, 0
view.setUint8 2, type.charCodeAt(0)

## Append map size
view.setUint8 3, 0
view.setUint8 4, 84
view.setUint8 5, 96

## Unknown
view.setUint8 6, 1
view.setUint8 7, 155

exports.buffer = buffer
