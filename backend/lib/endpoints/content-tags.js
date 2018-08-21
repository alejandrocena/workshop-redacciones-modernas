const ImagesMock = require('../../mock/images');

function endpoints(server) {
  console.log('Image Endpoint Loaded');
  
  /**
   * Gets Content image Guessing
   */
  server.post('/content/tags/meta', async function (req, res, next) {
    const tags = req.body.tags.split(',');
    const candidates=[];
    
    tags.map(tag => {
      const images = ImagesMock.get(tag);
      if(images && images.length > 0 ) {
        candidates.push(...images);
      }
    });
    
    //Did U Mean??
    
    res.send(200, {
      images: candidates
    });
    return next()
  });
}

module.exports = endpoints;
