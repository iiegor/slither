message = require '../utils/message'

arr = new Uint8Array(4)

message.writeInt8 0, arr, 0
message.writeInt8 1, arr, 0

## Append message type
message.writeInt8 2, arr, 'v'.charCodeAt(0)

## 2 - Closing socket and no victory message | 0 - Normal
message.writeInt8 3, arr, 0

exports.buffer = arr
