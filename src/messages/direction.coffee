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

  # Append angle (0-250)
  b += message.writeInt8 b, arr, direction.angle

  # Append unknown (Rotation speed - 104 is default)
  # INFO: The rotation speed depends on the angle (probably the difference between lastAngle and current angle).
  b += message.writeInt8 b, arr, 104

  # Append unkown
  b += message.writeInt8 b, arr, 0

  arr
