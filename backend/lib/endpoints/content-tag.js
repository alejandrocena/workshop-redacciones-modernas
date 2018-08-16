function endpoints(server) {
  console.log('Tag Endpoint Loaded');
  
  /**
   * Gets Content Tags
   */
  server.post('/content/tag', async function (req, res, next) {
    res.send(200, 'Tag 1');
    return next()
  });
  
}

module.exports = endpoints;