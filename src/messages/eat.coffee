message = require '../utils/message'

arr = new Uint8Array(11)

b = 0
b += message.writeInt8 b, arr, 0
b += message.writeInt8 b, arr, 0

## Append message type
b += message.writeInt8 b, arr, 'h'.charCodeAt(0)

exports.buffer = arr
