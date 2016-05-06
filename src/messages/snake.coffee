message = require '../utils/message'

type = 's'.charCodeAt(0)

exports.build = (snake) ->
  nameLength = snake.name.length
  partsLength = snake.parts.length * 2

  arr = new Uint8Array(27 + nameLength + 6 + partsLength)
  b = 0

  b += message.writeInt8 b, arr, 0
  b += message.writeInt8 b, arr, 0

  b += message.writeInt8 b, arr, type

  ## Append snake id
  b += message.writeInt16 b, arr, snake.id

  ## Append snake stop param
  b += message.writeInt24 b, arr, snake.D

  ## Append unknown
  b += message.writeInt8 b, arr, 0

  ## Append possible angles of the snake
  b += message.writeInt24 b, arr, snake.X

  ## Append snake speed
  b += message.writeInt16 b, arr, snake.speed

  ## Append unknown
  b += message.writeInt24 b, arr, 0

  ## Append snake skin
  b += message.writeInt8 b, arr, snake.skin

  ## Append spawn body positions
  b += message.writeInt24 b, arr, snake.body.x
  b += message.writeInt24 b, arr, snake.body.y

  ## Append name
  b += message.writeInt8 b, arr, nameLength
  b += message.writeString b, arr, snake.name

  b += message.writeInt24 b, arr, snake.head.x
  b += message.writeInt24 b, arr, snake.head.y

  i = 0
  while i < snake.parts.length
    b += message.writeInt8 b, arr, snake.parts[i].x
    b += message.writeInt8 b, arr, snake.parts[i].y

    i++

  arr
