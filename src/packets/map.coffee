message = require '../utils/message'

arr = new Uint8Array(26)

b = 0
b += message.writeInt8 b, arr, 0
b += message.writeInt8 b, arr, 0

## Append message type
b += message.writeInt8 b, arr, 'a'.charCodeAt(0)

## Append game radius
b += message.writeInt24 b, arr, global.Application.config['map-size']

## setMscps
b += message.writeInt16 b, arr, 411

## sector_size
b += message.writeInt16 b, arr, 480

## sector_count_along_edge
b += message.writeInt16 b, arr, 130

## spangdv 
b += message.writeInt8 b, arr, 4.8 * 10

## nsp1
b += message.writeInt16 b, arr, 4.25 * 100

## nsp2
b += message.writeInt16 b, arr, 0.5 * 100

## nsp3
b += message.writeInt16 b, arr, 12 * 100

## mamu
b += message.writeInt16 b, arr, 0.033 * 1e3

## manu2
b += message.writeInt16 b, arr, 0.028 * 1e3

## cst
b += message.writeInt16 b, arr, 0.43 * 1e3

## protocol_version
b += message.writeInt8 b, arr, 6

exports.buffer = arr
