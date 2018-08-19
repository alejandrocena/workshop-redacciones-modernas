import React, { Component } from 'react';

class PostEditor extends Component {
  
  constructor(props){
    super(props);
    this.handleTitleChanged.bind(this);
    this.handleDroplineChanged.bind(this);
    this.handleBodyChanged.bind(this);
  }
  
  handleTitleChanged = (title) => {
    const {onChange = ()=>{}} = this.props;
    this.setState({title});
    onChange(this.state);
  };
  
  handleDroplineChanged = (dropline) => {
    const {onChange = ()=>{}} = this.props;
    this.setState({dropline});
    onChange(this.state);
  };
  
  handleBodyChanged = (paragraphs) => {
    const {onChange = ()=>{}} = this.props;
    this.setState({paragraphs});
    onChange(this.state);
  };
  
  render() {
    const {post={}} = this.props;
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
            onChange={(event) => this.handleTitleChanged(event.target.value)}
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
            onChange={(event) => this.handleDroplineChanged(event.target.value)}
            value={dropline}
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Dropline</label>
          <textarea
            id="body"
            className="form-control"
            placeholder="Enter Body"
            onChange={(event) => this.handleBodyChanged(event.target.value.split('/n'))}
            value={paragraphs.join('/n')}
          />
        </div>
      </form>
    );
  }
}

export default PostEditor;