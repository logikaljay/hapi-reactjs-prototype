var internals = {
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
        reply.view('home', { name: request.query.name })
    }
}

module.exports = internals;