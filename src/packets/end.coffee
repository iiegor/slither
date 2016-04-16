message = require '../utils/message'

buffer = new Uint8Array(4)

message.writeInt8 0, buffer, 0
message.writeInt8 1, buffer, 0

## Append message type
message.writeInt8 2, buffer, 'v'.charCodeAt(0)

## 2 - Closing socket and no victory message | 0 - Normal
message.writeInt8 3, buffer, 0

exports.buffer = buffer
