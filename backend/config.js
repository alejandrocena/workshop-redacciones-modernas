const nconf = module.exports = require('nconf');
const path = require('path');

nconf
  // 1. Command-line arguments
  .argv()
  // 2. Environment variables
  .env([
    'NODE_ENV',
    'GCLOUD_PROJECT',
    'PORT'
  ])
  // 3. Config file
  .file({ file: path.join(__dirname, 'config.json') })
  // 4. Defaults
  .defaults({
    'PORT': "5000",
    
    // ----------------------------------------------------------------
    // ENTER YOUR CREDENTIALS HERE! or inject them using ENV variables
    // ----------------------------------------------------------------
    
    // Google Project ID
    'GCLOUD_PROJECT' : 'weeby-news-dev-203702',
    
    // ----------------------------------------------------------------
  
  });

checkConfig('PORT');
checkConfig('GCLOUD_PROJECT');

// Check for required settings

function checkConfig (setting) {
  if (!nconf.get(setting)) {
    throw "You must set " + setting + " as an environment variable or in config.json!";
  }
}