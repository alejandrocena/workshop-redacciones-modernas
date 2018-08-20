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
      </div>
    </div>
  );
}

/*
 
 <TitleMeta post={post} meta={meta} />
        <hr/>
      <DroplineMeta post={post} meta={meta} />
        <hr/>
      <ParagraphMeta post={post} meta={meta} />
        <hr/>
      <PostMeta post={post} meta={meta} />
 
  
 */


function TagsMeta ({post}) {
  const {tags} = post;
  return (
    <ul className="list-group">
      {tags.map((tag,index) => {
        return <li key={index} className="list-group-item"><span className="badge">{tag}</span></li>
      })}
    </ul>
  )
};

function CategoryMeta ({post}){
  const {categories} = post;
  return (
    <ul className="list-group">
      {categories.map((category,index) => {
        return <li key={index} className="list-group-item"><span className="badge">{category}</span></li>
      })}
    </ul>
  )
};

const TitleMeta = (props)=>{
  const {post:{title}} = props;
  
  return (
    <div className="well well-sm">
      <small>{title}</small>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow="70"
          aria-valuemin="0"
          aria-valuemax="100"
          style="width:70%"
        >
          70%
        </div>
      </div>
    </div>
  )
};

const DroplineMeta = ({dropline},{dropline:{entity_sentiment}})=>{
  const {} = entity_sentiment;
  return (
    <div className="well well-sm">
      <small>{dropline}</small>
      <ul className="list-group">
        {[].map((tag,index) => {
          return <li key={index} className="list-group-item"><span className="badge">{tag}</span></li>
        })}
      </ul>
    </div>
  );
};

const ParagraphMeta = ()=>{
  return "paragraphs";
};


export default MetaPanel;