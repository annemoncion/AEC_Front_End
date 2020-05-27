import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import {Bottin} from '../Bottin/Bottin';
import {Connexion} from '../Connexion/Connexion';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {connected: true};

    this.gestionConnexion = this.gestionConnexion.bind(this);
    this.verifierConnexion = this.verifierConnexion.bind(this);
  }

  verifierConnexion(connexion) {
    this.setState({connected: connexion});
  }

  gestionConnexion() {
    if (this.state.connected) {
      return (
        <Bottin />
      );
    }
    else {
      return (
        <Connexion onClick={this.verifierConnexion} />
      );
    }
  }

  render() {
    return (
<     Container fluid className="App">
        {this.gestionConnexion()}
      </Container>
    );
  }
}

export default App;
