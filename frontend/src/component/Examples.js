import React from 'react';
import {Examples} from '../mock/news';

const ExamplesComponent = ({onSelect=()=>{}}) => {
  const list = Examples.map((example,index)=> {
    return <ExampleListElement key={index} onSelect={onSelect} index={index} example={example} />
  });
  return <div className="btn-group" role="group" >{list}</div>
};

const ExampleListElement = ({example,index,onSelect}) => {
  return <button type="button" onClick={() => onSelect(example)} className="btn btn-secondary">{index}</button>
};

export default ExamplesComponent;