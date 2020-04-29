import React from 'react';
import {Catalogue} from '../Catalogue/Catalogue';
import './App.css';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Catalogue></Catalogue>
      </Container>
    </div>
  );
}

export default App;
