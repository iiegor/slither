message = require '../utils/message'

type = 'h'.charCodeAt(0)

exports.build = (id, fam) ->
  arr = new Uint8Array(8)
  
  b = 0
  b += message.writeInt8 b, arr, 0
  b += message.writeInt8 b, arr, 0

  ## Append message type
  b += message.writeInt8 b, arr, type

  ## Append food id
  b += message.writeInt16 b, arr, id

  ## Append unknown, related to food fam parameter
  b += message.writeInt24 b, arr, fam

  arr
