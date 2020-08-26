import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "react-bootstrap";
import DemoJSONLocal from './components/DemoJSONLocal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button variant="primary" size="lg" block id="boutonInstall"> 
          Installer l'application 
        </Button> 
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Une première PWA avec React!
        </p>
      </header>
      <DemoJSONLocal />
    </div>
  );
}

export default App;
