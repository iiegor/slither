message = require '../utils/message'

buffer = new Uint8Array(11)

b = 0
b += message.writeInt8 b, buffer, 0
b += message.writeInt8 b, buffer, 0

## Append message type
b += message.writeInt8 b, buffer, 'h'.charCodeAt(0)

buffer
