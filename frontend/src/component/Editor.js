import React, { Component } from 'react';
import PostEditor from '../component/PostEditor';
import MetaPanel from '../component/MetaPanel';
const Modal = require('react-bootstrap-modal');
const Loader = require('react-loader');

class Editor extends Component {
  
  render({post, meta,loading,message,preview,isValid}) {
    return (
      <div className="container">
        <div>
          <h3>Workshop Editor</h3>
        </div>
        <div className="row">
          <div className="col-sm"><PostEditor onChange={this.handleEditorChanged} /></div>
          <div className="col-sm"><MetaPanel post={post} meta={meta}/></div>
        </div>
        <div className="row">
          (
          (isValid || loading) ?
            <button type="button" className="btn btn-danger" disabled>Process</button>
          :
            <button type="button" className="btn btn-success" onClick={this.onProcessHandler}>Process</button>
          )
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

export default Editor;