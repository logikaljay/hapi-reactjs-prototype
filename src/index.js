var Path = require('path')
var Hapi = require('hapi')
var Vision = require('vision')
var Router = require('hapi-router')
var HapiReactViews = require('hapi-react-views')

// register babel presets
require('babel-core/register')({
    presets: [ 'react' ]
})

// setup the module's internal variables
var internals = {
    port: 3000,
    plugins: [
        Vision,
        {
            register: Router,
            options: { routes: 'src/**/*-route.js '}
        }
    ]
}

internals.init = function() {
    // setup the server
    var server = new Hapi.Server()
    server.connection({ port: this.port })
    
    // register the plugins and view engine
    server.register(this.plugins, (err) => {
        
        if (err) {
            console.log('Failed to load vision: %s', err)
        }
        
        server.views({
            engines: {
                jsx: HapiReactViews
            },
            relativeTo: Path.join(__dirname, '..'),
            path: 'views'
        });
        
        // start the server
        server.start((err) => {
            if (err) {
                throw err
            }
            
            console.log('hapi/react server started at: %s', server.info.uri)
        })
    })
}

internals.init()

module.exports = internals