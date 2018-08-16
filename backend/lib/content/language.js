/**
 *
 * Using this Source: https://github.com/googleapis/nodejs-language/blob/master/samples/analyze.v1.js
 */

'use strict';

function analyzeSentimentOfText(text) {
  // [START language_sentiment_string]
  // Imports the Google Cloud client library
  const language = require('@google-cloud/language');
  
  // Creates a client
  const client = new language.LanguageServiceClient();
  
  /**
   * TODO(developer): Uncomment the following line to run this code.
   */
    // const text = 'Your text to analyze, e.g. Hello, world!';
    
    // Prepares a document, representing the provided text
  const document = {
      content: text,
      type: 'PLAIN_TEXT',
    };
  
  // Detects the sentiment of the document
  return client
    .analyzeSentiment({document: document})
    .then(results => {
      const sentiment = results[0].documentSentiment;
      console.log(`Document sentiment:`);
      console.log(`  Score: ${sentiment.score}`);
      console.log(`  Magnitude: ${sentiment.magnitude}`);
      
      const sentences = results[0].sentences;
      sentences.forEach(sentence => {
        console.log(`Sentence: ${sentence.text.content}`);
        console.log(`  Score: ${sentence.sentiment.score}`);
        console.log(`  Magnitude: ${sentence.sentiment.magnitude}`);
      });
      return {
        sentiment,
        sentences
      };
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
  // [END language_sentiment_string]
}

function analyzeEntitiesOfText(text) {
  // [START language_entities_string]
  // Imports the Google Cloud client library
  const language = require('@google-cloud/language');
  
  // Creates a client
  const client = new language.LanguageServiceClient();
  
  // Prepares a document, representing the provided text
  const document = {
      content: text,
      type: 'PLAIN_TEXT',
    };
  
  // Detects entities in the document
  return client
    .analyzeEntities({document: document})
    .then(results => results[0].entities)
    .catch(err => {
      console.error('ERROR:', err);
    });
  // [END language_entities_string]
}

function analyzeSyntaxOfText(text) {
  // [START language_syntax_string]
  // Imports the Google Cloud client library
  const language = require('@google-cloud/language');
  
  // Creates a client
  const client = new language.LanguageServiceClient();
  
  /**
   * TODO(developer): Uncomment the following line to run this code.
   */
    // const text = 'Your text to analyze, e.g. Hello, world!';
    
    // Prepares a document, representing the provided text
  const document = {
      content: text,
      type: 'PLAIN_TEXT',
    };
  
  // Detects syntax in the document
  client
    .analyzeSyntax({document: document})
    .then(results => {
      const syntax = results[0];
      
      console.log('Tokens:');
      syntax.tokens.forEach(part => {
        console.log(`${part.partOfSpeech.tag}: ${part.text.content}`);
        console.log(`Morphology:`, part.partOfSpeech);
      });
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
  // [END language_syntax_string]
}

function analyzeEntitySentimentOfText(text) {
  // [START language_entity_sentiment_string]
  // Imports the Google Cloud client library
  const language = require('@google-cloud/language');
  
  // Creates a client
  const client = new language.LanguageServiceClient();
  
  /**
   * TODO(developer): Uncomment the following line to run this code.
   */
    // const text = 'Your text to analyze, e.g. Hello, world!';
    
    // Prepares a document, representing the provided text
  const document = {
      content: text,
      type: 'PLAIN_TEXT',
    };
  
  // Detects sentiment of entities in the document
  client
    .analyzeEntitySentiment({document: document})
    .then(results => {
      const entities = results[0].entities;
      
      console.log(`Entities and sentiments:`);
      entities.forEach(entity => {
        console.log(`  Name: ${entity.name}`);
        console.log(`  Type: ${entity.type}`);
        console.log(`  Score: ${entity.sentiment.score}`);
        console.log(`  Magnitude: ${entity.sentiment.magnitude}`);
      });
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
  // [END language_entity_sentiment_string]
}

function classifyTextOfText(text) {
  // [START language_classify_string]
  // Imports the Google Cloud client library
  const language = require('@google-cloud/language');
  
  // Creates a client
  const client = new language.LanguageServiceClient();
  
  // Prepares a document, representing the provided text
  const document = {
      content: text,
      type: 'PLAIN_TEXT',
    };
  
  // Classifies text in the document
  return client
    .classifyText({document: document})
    .then(results => {
      const classification = results[0];
      
      console.log('Categories:');
      classification.categories.forEach(category => {
        console.log(
          `Name: ${category.name}, Confidence: ${category.confidence}`
        );
      });
      return classification;
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
  // [END language_classify_string]
}

module.exports = {
  analyzeSentimentOfText,
  analyzeEntitiesOfText,
  analyzeSyntaxOfText,
  analyzeEntitySentimentOfText,
  classifyTextOfText
};