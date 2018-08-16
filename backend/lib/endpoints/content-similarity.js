function endpoints(server) {
  console.log('Similarity Endpoint Loaded');
  
  /**
   * Gets Content Similarity Related
   */
  server.post('/content/similarity', async function (req, res, next) {
    res.send(200, ['Documento 1','Documento 2']);
    return next()
  });
}

module.exports = endpoints;