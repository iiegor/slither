message = require '../utils/message'

buffer = new Uint8Array(3)

message.writeInt8 3, buffer, 'p'.charCodeAt(0)

exports.buffer = buffer