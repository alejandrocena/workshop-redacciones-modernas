import React, { Component } from 'react';
import Editor from '../component/Editor';
const doProcess = require('../lib/process');


const EMPTY_NEWS = {title:'',dropline:'',paragraphs:[]};

const isValid = (post) => {
  return true;
};

class EditorContainer extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      post:EMPTY_NEWS,
      loading:false,
      message:'',
      meta: null,
      preview:false
    };
    this.handleEditorChanged.bind(this);
  }
  
  handleEditorChanged = (post) => {
    this.setState({post});
  };
  
  onProcessHandler = async () => {
    const post = this.state;
    this.setState({...post,loading:true,message:'loading...'});
    try {
      const meta = await doProcess(
        post,
        (message) => {
          this.setState({message})
        }
      );
      this.setState({...post,meta,loading:false,message:''});
      console.log(meta);
    } catch (err) {
      console.error(err);
      this.setState({...post,meta:null,loading:false,message:''});
    }
  };
  
  
  render() {
    const {post,loading,message,meta} = this.state;
    const {onPublish=()=>{}} = this.props;
    const isValid = isValid(post);
    return (
      <div>
        <Editor post={post} loading={loading} message={message} meta={meta} isValid={isValid}/>
        (
          (isValid && meta && post) ?
            <button onClick={() => onPublish({post,meta})}>Publish</button>
          :
            <button className="btn btn-danger" disabled>Publish</button>
        )
      </div>
    )
  }
}

export default EditorContainer;