colors = require "colors"
fs = require "fs"

module.exports =
class Logger
  level: {
    INFO: "INFO"
    ERROR: "ERROR"
    DEBUG: "DEBUG"
  }

  constructor: (@caller) ->

  log: (level, message) ->
    return console.log "[#{@caller.name}] [?] #{message}" if typeof level == "undefined"

    switch level
      when @level.INFO
        console.info "[#{@caller.name}]".cyan + "[#{level}] ".green + "#{message}"
      when @level.ERROR
        console.error "[#{@caller.name}]".cyan + "[#{level}] ".red + "#{message} - ", arguments[2]
        @write """
          #{new Date()}
          ERROR: #{@caller.name} #{message}
          MESSAGE: #{arguments[2]}
          \n
          """ if global.Application.config['env'] != 'dev'
      when @level.DEBUG
        console.log "[#{@caller.name}]".cyan + "[#{level}] ".gray + "#{message}" if global.Application.config['env'] is 'dev'

  write: (exception) -> fs.appendFile global.Application.config.logfile, exception
