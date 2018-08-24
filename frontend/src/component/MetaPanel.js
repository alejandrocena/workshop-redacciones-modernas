import React from 'react';

function MetaPanel(props) {
  const {post,meta} = props;
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <b>Tags:</b>
        <TagsMeta post={post} meta={meta} />
        <hr/>
        <b>Categories:</b>
        <CategoryMeta post={post} meta={meta} />
        <hr/>
        <b>Title Meta:</b>
        <TitleMeta post={post} meta={meta} />
        <b>Media:</b>
        <MediaMeta post={post} meta={meta} />
      </div>
    </div>
  );
}

function TagsMeta (props) {
  const {meta:{dropline:{entity_sentiment},tags:{similarities}}} = props;
  return (
    <ul className="list-group">
      <ul className="list-group">
        {entity_sentiment.map((entity,index) => {
          const similar = similarities.filter( elem => elem.original === entity.name);
          return <li key={index} className="list-group-item">
            <span className="badge">{entity.name}</span>
            <ScoreMagnitude score={entity.sentiment.score} magnitude={entity.sentiment.magnitude}/>
            {similar.length ? similar.map((elem,index) => <SimilarTag key={index} {...elem} />) : ''}
          </li>
        })}
      </ul>
    </ul>
  )
};

function SimilarTag ({original,near,distance}) {
  if(distance === 0 ) {
    return <span className="badge badge-success"> Matched! </span>
  } else {
    return <span className="badge badge-dark"> Did you mean <b>"{near}"</b>?</span>;
  }
}

function MediaMeta (props) {
  const {meta:{images}} = props;
  return (
    <ul className="list-group">
      <ul className="list-group">
        {images.map((image,index) => {
          return <li key={index} className="list-group-item">
            <img src={image} height={200}/>
          </li>
        })}
      </ul>
    </ul>
  )
};

function CategoryMeta ({post}){
  const {categories} = post;
  return (
    <ol className="list-group">
      {categories.map((category,index) => {
        return <li key={index} className="list-group-item"><span className="badge">{category}</span></li>
      })}
    </ol>
  )
};

const TitleMeta = (props)=>{
  const {post:{title},meta:{title:{sentiment}}} = props;
  
  return (
    <div className="well well-sm">
      <small>{title}</small>
      <ol>
        {sentiment.sentences.map( (sentence,index) => {
          return <li key={index}>
            <small>{sentence.text.content}</small>
            <ScoreMagnitude score={sentence.sentiment.score} magnitude={sentence.sentiment.magnitude} />
          </li>
        })}
      </ol>
    </div>
  )
};

function DroplineMeta (props) {
  const {post:{dropline},meta:{dropline:{entity_sentiment}}} = props;
  console.log(entity_sentiment);
  
  return (
    <div className="well well-sm">
      <small>{dropline}</small>
      <ul className="list-group">
        {entity_sentiment.map((entity,index) => {
          return <li key={index} className="list-group-item">
            <span className="badge">{entity.name}</span>
            <ScoreMagnitude score={entity.sentiment.score} magnitude={entity.sentiment.magnitude}/>
          </li>
        })}
      </ul>
    </div>
  );
};


const ScoreMagnitude = ({score,magnitude})=> {
  return (
    ( -0.25 > score ) ?
      <span className="badge badge-danger">negative</span>
      :
      ( score > 0.25) ?
        <span className="badge badge-success">positive</span>
        :
        <span className="badge badge-info">neutral</span>
  )
};

export default MetaPanel;