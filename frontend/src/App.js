import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './artear.png';
import './App.css';
import Backoffice from "./container/Backoffice";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Mediaparty 2018 :: Workshop 'Herramientas de IA para Redacciones Modernas'</h1>
          <span>Alejandro Cena</span>
        </header>
        <Backoffice />
      </div>
    );
  }
}

export default App;
