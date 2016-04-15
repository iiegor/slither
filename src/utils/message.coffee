module.exports =
  writeInt24: (offset, data, number) ->
    number = Math.floor(number)
    
    if number > 16777215
      throw new Error('Int24 out of bound')

    byte1 = number >> 16 & 0xFF
    byte2 = number >> 8 & 0xFF
    byte3 = number & 0xFF

    data[offset] = byte1
    data[offset + 1] = byte2
    data[offset + 2] = byte3

    3

  writeInt16: (offset, data, number) ->
    number = Math.floor(number)

    if number > 65535
      throw new Error('Int16 out of bound')

    byte1 = number >> 8 & 0xFF
    byte2 = number & 0xFF

    data[offset] = byte1
    data[offset + 1] = byte2

    2

  writeInt8: (offset, data, number) ->
    number = Math.floor(number)

    if number > 255
      throw new Error('Int8 out of bound')

    byte1 = number & 0xFF
    data[offset] = byte1

    1

  writeString: (offset, data, string) ->
    i = 0
    while i < string.length
      @writeInt8 offset + i, data, string.charCodeAt(i)
      i++

    string.length

  readInt8: (offset, data) ->
    data[offset]

  readInt24: (offset, data) ->
    byte1 = data[offset]
    byte2 = data[offset + 1]
    byte3 = data[offset + 2]
    int = byte1 << 16 | byte2 << 8 | byte3
    int

  readString: (offset, data, length) ->
    string = ''
    i = offset
    while i < length
      string += String.fromCharCode(data[i])
      i++

    string