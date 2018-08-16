'use strict';
const restify = require('restify');
const config = require('./config');
const endpoints = require('./lib/endpoints');


const server = restify.createServer({
  name: 'BACKEND :: Media Party 2018 :: Herramientas de IA para Redacciones Modernas'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser({ mapParams: true }));

/**
 * Loading endpoints
 */
endpoints.map(endpoint => endpoint(server));

/**
 *
 * Asks a ping
 */
server.get('/ping', function (req, res, next) {
  res.send('pong');
  logger.log('info','pong');
  return next();
});

if (module === require.main) {
  // Start the server
  server.listen( config.get('PORT'), function () {
    console.log(server.name + ' listening at ' + server.url);
  });
}

module.exports = {
  server: server
};