message = require '../utils/message'

arr = new Uint8Array(3)

message.writeInt8 2, arr, 'p'.charCodeAt(0)

module.exports = arr