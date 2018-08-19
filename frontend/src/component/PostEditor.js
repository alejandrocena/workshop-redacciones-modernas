import React from 'react';

const PostEditor = (props)=>{
    const {post,onChange} = props;
    const {title,dropline,paragraphs=[]} = post;
    
    
    return (
      <form>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type='text'
            className="form-control"
            id="title"
            placeholder="Enter title"
            onChange={(event) => onChange({title:event.target.value,dropline,paragraphs})}
            value={title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dropline">Dropline</label>
          <input
            type='text'
            className="form-control"
            id="dropline"
            placeholder="Enter Dropline"
            onChange={(event) => onChange({title,dropline:event.target.value,paragraphs})}
            value={dropline}
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Dropline</label>
          <textarea
            id="body"
            className="form-control"
            placeholder="Enter Body"
            onChange={(event) => onChange({title,dropline,paragraphs:event.target.value.split('\n')})}
            value={paragraphs.join('\n')}
            style={{height:'200px'}}
          />
        </div>
      </form>
    );
}

export default PostEditor;