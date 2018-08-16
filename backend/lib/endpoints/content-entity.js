const assert = require('assert');
const language = require('../content/language');

function endpoints(server) {
  console.log('Entity Endpoint Loaded');
  
  
  /**
   * Gets Content entity extraction
   */
  server.post('/content/entity/extract', async function (req, res, next) {
    const text = req.body.text;
    assert.ok(text.length>0,'No title');
  
    try {
      res.send(200, await language.analyzeEntitiesOfText(text));
    } catch (err) {
      res.send(500, err);
    }
    return next()
  });
  
  /**
   * Gets Content entity sentiment
   */
  server.post('/content/entity/sentiment', async function (req, res, next) {
    const text = req.body.text;
    assert.ok(text.length>0,'No title');
    
    try {
      res.send(200, await language.analyzeEntitiesOfText(text));
    } catch (err) {
      res.send(500, err);
    }
    return next()
  });
  
}

module.exports = endpoints;