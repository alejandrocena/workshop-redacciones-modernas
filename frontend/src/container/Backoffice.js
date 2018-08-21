import React, { Component } from 'react';
import {doProcess} from '../lib/process';
import MetaPanel from "../component/MetaPanel";
import Loader from 'react-loader-spinner'
import ExamplesComponent from "../component/Examples";
import EditorContainer from './Editor';
import Preview from "../component/Preview";
const Modal = require('react-bootstrap-modal');


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
    this.handleExampleSelected.bind(this);
    this.handlePostChanged.bind(this);
    this.process.bind(this);
  }
  
  process = async post => {
    try {
      const result = await doProcess(post, console.info);
      this.setState({meta:result.meta,post:result.post,loading:false});
      console.log(result);
    } catch (err) {
      console.error(err);
      this.setState({post,meta:null,loading:false,message:''});
    }
  };
  
  handlePostPublish = async (post) => {
    this.setState({loading:true});
    setTimeout(() => this.process(post));
  };
  
  handleExampleSelected = (example) => {
    this.setState({post:example,meta:null});
  };
  
  handlePostChanged = (post) => {
    this.setState({post});
  };
  
  render() {
    const {post,loading,meta,preview} = this.state;
    
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm" >
            {
              post && meta && preview ?
                  <Preview post={post} meta={meta} />
              :
                <div>
                  <ExamplesComponent onSelect={this.handleExampleSelected} />
                  <EditorContainer post={post} onPublish={this.handlePostPublish} onChange={this.handlePostChanged}/>
                </div>
            }
          </div>
          <div className="col-sm">
            { meta ? <MetaPanel post={post} meta={meta}/> : "" }
          </div>
        </div>
        {
            loading
          ?
            <Modal show={true} aria-labelledby="ModalHeader" >
              <Modal.Header> <Modal.Title id='ModalHeader'>Loading...</Modal.Title></Modal.Header>
              <Modal.Body>
                <Loader type="ThreeDots" color="#fafafa" height={200} width={200} />
              </Modal.Body>
            </Modal>
          :
              ""
        }
      </div>
    );
  }
}

export default WorkshopEditor;