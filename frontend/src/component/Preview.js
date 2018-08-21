import React from 'react';

function Preview ({post,meta}){
  return (
    <div>
      <h1>{post.title}</h1>
      <p>
        <b>Tags: </b> {post.tags.map( tag => <span className="badge badge-info">{tag}</span>)}<br/>
          <b>Categories: </b> {post.categories.map( category => <span className="badge badge-info">{category}</span>)}
      </p>
      <img width={'100%'} src={post.image} />
      <p className="lead">{post.dropline}</p>
      <hr className="my-2" />
      {post.paragraphs.map( paragraph => <p>{paragraph}</p>)}
    </div>
  );
}


export default Preview;