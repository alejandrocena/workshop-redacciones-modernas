import defaultImage from '../default.png';
import {Entity,Sentiment,Category,Tags} from './backend';


//const TAG_ENTITY_TYPES = ['PERSON','LOCATION'];

export const doProcess = async (post,onMessage=()=>{}) => {
  
  onMessage('Loading General Title Sentiment...');
  const title_sentiment = await Sentiment.extract(post.title);
  
  onMessage('Loading General Content Sentiment...');
  const dropline_entity_sentiment = await Entity.sentiment(post.dropline);
  
  onMessage('Filtering Results...');
  const filtered_entities_sentiment = dropline_entity_sentiment
    //.filter(entity => TAG_ENTITY_TYPES.indexOf(entity.type) !== -1 )
    //.filter(entity => entity.salience > 0.4);
  
  onMessage('Loading Tags...');
  const tags = filtered_entities_sentiment.map( entity => entity.name);
  
  onMessage('Looking for Tags Similarity...');
  const tags_similarities = await Tags.similarity(tags);
  
  onMessage('Loading Matching Image Tags...');
  const tags_meta = await Tags.meta(tags);
  const image = tags_meta.images.length > 0 ? tags_meta.images[0] : defaultImage ;
  
  onMessage('Guessing Content Category...');
  const dropline_category_guessing = await Category.guess(post.paragraphs.join(''));
  
  onMessage('Loading Categories...');
  const categories = dropline_category_guessing.categories.map(category => category.name);
  
  post.tags = tags;
  post.categories = categories;
  post.image = image;
  
  return {
    post,
    meta: {
      title: {
        sentiment: title_sentiment
      },
      dropline: {
        entity_sentiment: filtered_entities_sentiment,
      },
      paragraphs: {
        category_guessing: dropline_category_guessing
      },
      images : tags_meta.images,
      tags: {
        similarities: tags_similarities
      }
    }
  };
};