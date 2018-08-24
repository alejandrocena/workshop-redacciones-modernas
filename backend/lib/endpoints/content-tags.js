const ImagesMock = require('../../mock/images');
const TagsMock = require('../../mock/tags');
const levenshtein = require('fast-levenshtein');

function endpoints(server) {
  console.log('Image Endpoint Loaded');
  
  /**
   * Gets Content tags Guessing
   */
  server.get('/content/tags/meta', async function (req, res, next) {
    const tags = req.query.tags.split(',');
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
  
  /**
   * Gets Content tags Similarity
   */
  server.get('/content/tags/similarity', async function (req, res, next) {
    const tag = req.query.tag;
    
    try {
      const similarity = TagsMock.map( aTag => {
        return {
          'near': aTag,
          'original': tag,
          'distance': levenshtein.get(tag, aTag)
        }
      })
        .filter(elem => elem.distance < 3);
      res.send(200, similarity);
    } catch (err) {
      res.send(500, err);
    }
    return next()
  });
}

module.exports = endpoints;
