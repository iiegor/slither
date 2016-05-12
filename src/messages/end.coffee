message = require '../utils/message'

arr = new Uint8Array(4)

b = 0
b += message.writeInt8 b, arr, 0
b += message.writeInt8 b, arr, 0

## Append message type
b += message.writeInt8 b, arr, 'v'.charCodeAt(0)

## 2 - Closing socket and no victory message | 0 - Normal
b += message.writeInt8 b, arr, 0

module.exports = arr
