import {Entity,Sentiment,Category} from './backend';


const TAG_ENTITY_TYPES = ['PERSON','LOCATION'];

export const doProcess = async (post,onMessage=()=>{}) => {
  
  onMessage('Loading General Title Sentiment...');
  const title_sentiment = await Sentiment.extract(post.title);
  
  onMessage('Loading General Dropline Sentiment...');
  const dropline_entity_sentiment = await Entity.sentiment(post.dropline);
  
  onMessage('Filtering Results...');
  const filtered_entities_sentiment = dropline_entity_sentiment
    .filter(entity => TAG_ENTITY_TYPES.indexOf(entity.type) !== -1 )
    .filter(entity => entity.salience > 0.4);
  
  onMessage('Loading Tags...');
  const tags = filtered_entities_sentiment.map( entity => entity.name);
  
  onMessage('Guessing Content Category...');
  const dropline_category_guessing = await Category.guess(post.paragraphs.join(''));
  
  onMessage('Loading Categories...');
  const categories = dropline_category_guessing.categories.map(category => category.name);
  
  post.tags = tags;
  post.categories = categories;
  
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
      }
    }
  };
};