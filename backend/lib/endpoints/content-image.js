function endpoints(server) {
  console.log('Image Endpoint Loaded');
  
  /**
   * Gets Content image Guessing
   */
  server.post('/content/image/guess', async function (req, res, next) {
    const entities = req.body.entities;
    
    
    
    
    
    res.send(200, ['imagen 1','imagen 2']);
    return next()
  });
}

module.exports = endpoints;
