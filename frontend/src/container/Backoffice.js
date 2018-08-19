import React, { Component } from 'react';
import {doProcess} from '../lib/process';
import MetaPanel from "../component/MetaPanel";
import EditorContainer from './Editor';
import Preview from "../component/Preview";
const Modal = require('react-bootstrap-modal');
const Loader = require('react-loader');


const EMPTY_NEWS = {title:'',dropline:'',paragraphs:[]};

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
    this.handlePostPublish.bind(this);
  }
  
  handlePostPublish = async (post) => {
    this.setState({post,loading:true,message:'loading'});
    try {
      const meta = await doProcess(
        post,
        (message) => {
          this.setState({message})
        }
      );
      this.setState({meta,loading:false,message:''});
      console.log(meta);
    } catch (err) {
      console.error(err);
      this.setState({post,meta:null,loading:false,message:''});
    }
  };
  
  render() {
    const {post,loading,message,meta,preview} = this.state;
    
    return (
      <div className="container">
        <div>
          <h3>Workshop Editor</h3>
        </div>
        <div className="row">
          <div className="col-sm" >
            {
              post && meta && preview ?
                <Preview post={post} meta={meta} />
              :
                <EditorContainer post={post} onPublish={this.handlePostPublish}/>
            }
          </div>
          <div className="col-sm">
            { meta ? <MetaPanel post={post} meta={meta}/> : "" }
          </div>
        </div>
        
        <Modal show={loading} aria-labelledby="ModalHeader" >
          <Modal.Header> <Modal.Title id='ModalHeader'>${message}</Modal.Title></Modal.Header>
          <Modal.Body>
            <Loader type="ThreeDots" color="#222" height={200} width={200} />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default WorkshopEditor;