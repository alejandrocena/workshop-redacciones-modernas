import React from 'react';

function Preview ({post,meta}){
  return (
    <div>
      <h1>{post.title}</h1>
      <p>
        <b>Tags: </b> {post.tags.map( (tag,index) => <span key={index} className="badge badge-info">{tag}</span>)}<br/>
        <b>Categories: </b> {post.categories.map( (category, index) => <span key={index} className="badge badge-info">{category}</span>)}
      </p>
      <img width={'100%'} src={post.image} />
      <p className="lead">{post.dropline}</p>
      <hr className="my-2" />
      {post.paragraphs.map( (paragraph, index) => <p key={index}>{paragraph}</p>)}
    </div>
  );
}


export default Preview;