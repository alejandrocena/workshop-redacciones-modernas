function endpoints(server) {
  console.log('Entity Endpoint Loaded');
  
  
  /**
   * Gets Content entity extraction
   */
  server.post('/content/entity/extract', async function (req, res, next) {
    res.send(200, ['Cristina Fernandez de Kirchner','Bonadio']);
    return next()
  });
  
}

module.exports = endpoints;