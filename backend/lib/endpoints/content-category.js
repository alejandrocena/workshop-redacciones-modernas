
function endpoints(server) {
  console.log('Category Endpoint Loaded');
  
  /**
   * Gets Content category Guessing
   */
  server.post('/content/category/guess', async function (req, res, next) {
    res.send(200, ['economia']);
    return next()
  });
}

module.exports = endpoints;