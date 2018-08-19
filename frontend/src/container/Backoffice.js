import React, { Component } from 'react';
import EditorContainer from './Editor';
import Preview from "../component/Preview";
import {doProcess} from '../lib/process';


const EMPTY_NEWS = {title:'',dropline:'',paragraphs:[]};

const isValid = (post) => {
  return true;
};

class WorkshopEditor extends Component {
  
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
    const {post,loading,message,meta,preview} = this.state;
    const valid = isValid(post);
    
    if(isValid && meta && preview) {
     return <EditorContainer post={post} loading={loading} message={message} meta={meta} preview={preview} isValid={valid}/>;
    } else {
      return <Preview post={post} meta={meta} />;
    }
    
    
  }
}

export default WorkshopEditor;