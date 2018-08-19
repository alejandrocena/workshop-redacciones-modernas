import React from 'react';
import PostEditor from "../component/PostEditor";

const isValid =  (post={}) => {
  const {title='',dropline='',paragraphs=[]} = post;
  return title.length > 20 && dropline.length > 20 && paragraphs.length > 1
};

const EditorContainer = (props) => {
    const {post, onPublish=()=>{}, onChange=()=>{}} = props;
    const valid = isValid(post);
    
    return (
      <div>
        <PostEditor post={post} onChange={onChange} />
        {
          valid ?
            <button className="btn btn-success" onClick={() => onPublish(post)}>Publish</button>
          :
            <button className="btn btn-danger" disabled>Publish</button>
        }
      </div>
    )
}

export default EditorContainer;