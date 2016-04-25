message = require '../utils/message'

type = 'u'.charCodeAt(0)

exports.build = (foods) ->
  arr = new Uint8Array(16)

  # Some example food position?
  arr.set [0, 0, type, 244, 64, 201, 96, 200, 96, 200, 112, 200, 120, 6, 188, 127]

  arr
