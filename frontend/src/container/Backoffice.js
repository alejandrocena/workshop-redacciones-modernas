import React, { Component } from 'react';
import {doProcess} from '../lib/process';
import MetaPanel from "../component/MetaPanel";
import Loader from 'react-loader-spinner'
import {Modal,ModalHeader,ModalBody} from 'reactstrap';
import ExamplesComponent from "../component/Examples";
import EditorContainer from './Editor';
import Preview from "../component/Preview";


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
  
  process = async (post) => {
    try {
      const result = await doProcess(post, (message) => this.setState({message}));
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
    const {post,loading,meta,preview,message} = this.state;
    
    return (
      <div className="container-fluid ">
        <div className="row">
          <div className="col-sm" >
            <ExamplesComponent onSelect={this.handleExampleSelected} />
            <EditorContainer post={post} onPublish={this.handlePostPublish} onChange={this.handlePostChanged}/>
          </div>
          <div className="col-sm">
            { meta ? <MetaPanel post={post} meta={meta}/> : "" }
          </div>
        </div>
        <Modal isOpen={loading}>
          <ModalHeader>{message}</ModalHeader>
          <ModalBody>
            <div style={{'text-align':'center'}}>
              <Loader type="TailSpin" color="#fa" height={200} width={200} />
            </div>
          </ModalBody>
        </Modal>
  
        <Modal isOpen={post && meta && preview}>
          <ModalHeader>Preview</ModalHeader>
          <ModalBody>
            <Preview post={post} meta={meta} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default WorkshopEditor;