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


server.use(
  function crossOrigin(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    return next();
  }
);

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

server.opts('*', (req, res, next) => {
  res.header('Access-Control-Allow-Headers', 'Accept, Content-Type, X-Requested-With');
  res.send(200);
  next();
});

if (module === require.main) {
  // Start the server
  server.listen( config.get('PORT'), function () {
    console.log(server.name + ' listening at ' + server.url);
    const routes = server.router._registry._routes;
    for (let p in routes) {
      if( routes.hasOwnProperty(p) ) {
        console.log(routes[p].method + "::" + routes[p].path + " - " + routes[p].name);
      }
    }
  });
}

module.exports = {
  server: server
};