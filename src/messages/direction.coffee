message = require '../utils/message'

type = 'e'.charCodeAt(0)

exports.build = (id, direction) ->
  arr = new Uint8Array(7)
  
  b = 0
  b += message.writeInt8 b, arr, 0
  b += message.writeInt8 b, arr, 0

  ## Append message type
  b += message.writeInt8 b, arr, type

  ## Append snake id
  b += message.writeInt16 b, arr, id

  ###
  Append position values
  @todo Sending this makes conflict with the normal movement 
  of the snake. Probably due to a bad calculation of the direction parameters.
  ###

  # Append angle (0-250)
  b += message.writeInt8 b, arr, direction.angle

  # Append unknown (Something related to the snake speed - 104 is default)
  b += message.writeInt8 b, arr, 104

  arr
