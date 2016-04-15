exports.stobuf = (str) ->
  length = str.length
  arrayBuf = new ArrayBuffer(length)
  view = new Uint8Array(arrayBuf)

  i = 0
  while i < length
    view[i] = str[i]
    i++

  view.buffer