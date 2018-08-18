import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './artear.png';
import './App.css';
import WorkshopEditor from "./container/WorkshopEditor";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Mediaparty 2018 :: Workshop 'Herramientas de IA para Redacciones Modernas'</h1>
          <span>Alejandro Cena</span>
        </header>
        <WorkshopEditor />
      </div>
    );
  }
}

export default App;
