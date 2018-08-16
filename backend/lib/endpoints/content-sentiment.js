const assert = require('assert');
const language = require('../content/language');


function endpoints(server) {
  console.log('Tag Endpoint Loaded');
  
  /**
   * Gets Content Tags
   */
  server.post('/content/sentiment', async function (req, res, next) {
    const text = req.body.text;
    assert.ok(text.length>0,'No title');
    
    try {
      res.send(200, await language.analyzeSentimentOfText(text));
    } catch (err) {
      res.send(500, err);
    }
    
    return next()
  });
  
}

module.exports = endpoints;