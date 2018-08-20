import {Entity,Sentiment,Category} from './backend';


const TAG_ENTITY_TYPES = ['PERSON','LOCATION'];



export const doProcess = async (post,onMessage=()=>{}) => {
  
  onMessage('Loading General Title Sentiment...');
  //const title_sentiment = await Sentiment.extract(post.title);
  
  onMessage('Loading General Dropline Sentiment...');
  //const dropline_entity_sentiment = await Entity.sentiment(post.dropline);
  
  onMessage('Guessing Dropline Category...');
  const dropline_category_guessing = await Category.guess(post.paragraphs.join(''))/*.map(category => Mapping.get())*/;
  
  const categories = dropline_category_guessing.categories.map(category => category.name);
  
  
  
  // title
    // sentimiento
    // entidades
  
  // Dropline
    // Tags entidades c/sentimiento
    // categorizacion
  
  // Imagenes
  
};