startTime = Date.now()

pkg = require '../package'
server = require './server'

keys = require 'object-keys'
semver = require 'semver'
{EventEmitter} = require 'events'

module.exports =
class Application extends EventEmitter
  ###
  Section: Properties
  ###
  logger: null
  config: null

  ###
  Section: Construction
  ###
  constructor: ->
    global.Application = this

    @config = require '../config/default'
    @logger = new (require './utils/logger')(Application)

    @logger.log @logger.level.DEBUG, "You are running #{pkg.name} #{pkg.version}"
    @logger.log @logger.level.INFO, "Starting the server in #{@config.env} at port #{@config.port}..."

    # Handle app events
    @handleEvents()

    # Load plugins
    @loadPlugins()

    # Bootstrap the application
    @bootstrap()

  ###
  Section: Private
  ###
  bootstrap: ->
    server = new server @config.port
    server.bind()

  # Register all application events
  handleEvents: ->
    @on 'application:started', -> @logger.log @logger.level.INFO, "Server started in #{Date.now() - startTime}ms"
    @on 'application:dispose', @dispose

    unless process.platform is 'win32'
      process.on 'SIGTERM', ->
        process.exit 0

  # Load application plugins
  loadPlugins: ->
    plugins = pkg.packageDependencies

    for plugin in keys(plugins)
      try
        # Validate package
        depPkg = require "#{plugin}/package.json"
        depEngine = depPkg.engines['slither-server']

        if typeof depEngine is 'undefined'
          return throw new Error('The plugin does not support this server')
        else if !semver.satisfies(pkg.version, depEngine)
          return throw new Error("Compatibility error (#{depEngine})")
        else
          dep = require plugin
      catch error then @logger.log @logger.level.ERROR, "Cannot load '#{plugin}' plugin", error

  # Dispose with success code
  dispose: ->
    process.exit 0
