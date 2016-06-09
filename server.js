'use strict';

const Hapi = require('hapi');
const Path = require('path');

const server = new Hapi.Server();
server.connection({
    host: '0.0.0.0',
    port: 8000
});

server.register(require('inert'), (err) => {
    if (err) {
        throw err;
    }

    server.route({
        method: 'GET',
        path: '/css/addtohomescreen.css',
        handler: function (request, reply) {
            reply.file(Path.join(__dirname, 'bower_components/add-to-homescreen/style/addtohomescreen.css'));
        }
    });

    server.route({
        method: 'GET',
        path: '/js/addtohomescreen.js',
        handler: function (request, reply) {
            reply.file(Path.join(__dirname, 'bower_components/add-to-homescreen/src/addtohomescreen.js'));
        }
    });

    server.route({
        method: 'GET',
        path:'/',
        handler: function (request, reply) {
            reply.file(Path.join(__dirname, 'index.html'));
        }
    });

    server.start((err) => {
        if (err) {
            throw err;
        }
        console.log('Server running at:', server.info.uri);
    });
});
