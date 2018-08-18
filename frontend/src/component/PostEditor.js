import React, { Component } from 'react';

class PostEditor extends Component {
  
  constructor(props){
    super(props);
    const {title,dropline,pagraphs=[]} = props;
    this.state = {title,dropline,pagraphs};
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
    const {title,dropline,pagraphs=[]} = this.props;
  
    return (
      <div>
        <h3>Post Editor</h3>
        <input type='text' onChange={(event) => this.handleTitleChanged(event.target.value)} value={title}/>
        <input type='text' onChange={(event) => this.handleDroplineChanged(event.target.value)} value={dropline}/>
        <textarea onChange={(event) => this.handleBodyChanged(event.target.value.split('/n'))}>${pagraphs.join('/n')}}</textarea>
      </div>
    );
  }
}

export default PostEditor;