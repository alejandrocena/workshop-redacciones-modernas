import React, { Component } from 'react';
import PostEditor from "../component/PostEditor";

const isValid =  (post={}) => {
  const {title,dropline,paragraphs} = post;
  return title.length > 20 && dropline > 20 && paragraphs.length > 1
};

class EditorContainer extends Component {
  
  constructor(props) {
    super(props);
    const {post} = props;
    this.state = post;
    this.handleTitleChanged.bind(this);
    this.handleDroplineChanged.bind(this);
    this.handleParagraphsChanged.bind(this);
  }
  
  handleTitleChanged = (title) => {
    this.setState({title});
  };
  
  handleDroplineChanged = (dropline) => {
    this.setState({dropline});
  };
  
  handleParagraphsChanged = (paragraphs) => {
    this.setState({paragraphs});
  };
  
  render() {
    const post = this.state;
    const {onPublish=()=>{}} = this.props;
    const valid = isValid(post);
    
    return (
      <div>
        <PostEditor post={post} onTitleChange={this.handleTitleChanged} onDrolpineChange={this.handleDroplineChanged} onParagraphChange={this.handleParagraphsChanged} />
        {
          valid ?
            <button className="btn btn-success" onClick={() => onPublish(post)}>Publish</button>
          :
            <button className="btn btn-danger" disabled>Publish</button>
        }
      </div>
    )
  }
}

export default EditorContainer;