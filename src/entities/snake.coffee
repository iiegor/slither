misc = require '../utils/misc'

module.exports =
class Snake
  ###
  Section: Construction
  ###
  constructor: (@id, @username, @skin) ->
    @speed = 5.76 * 1e3

    pos = misc.randomSpawnPoint()

    @xPos = pos.x
    @yPos = pos.y

    @xPosHead = pos.x
    @yPosHead = pos.y

    @D = 3.1415926535 / Math.PI * 16777215
    @X = @D

    @parts = [
      {
        x: 1
        y: 2
      }

      {
        x: 3
        y: 4
      }
    ]