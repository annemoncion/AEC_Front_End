import React from 'react';
import './App.css';
import {Catalogue} from './components/Catalogue';
import {Connexion} from './components/Connexion';
import Container from 'react-bootstrap/Container';

export class App extends React.Component {
   constructor(props) {
    super(props);
    this.state = {connexion: true};

    this.verifierConnexion = this.verifierConnexion.bind(this);
    this.seDeconnecter = this.seDeconnecter.bind(this);
    this.gererConnexion = this.gererConnexion.bind(this);
  }

  verifierConnexion(connexion) {
    this.setState({connexion : connexion});
  }

  seDeconnecter(connecter) {
    this.setState({connexion: connecter});
  } 

  gererConnexion() {

    if(this.state.connexion) {
      return (
        <Catalogue connexion={this.seDeconnecter}/>  
      )
    }
    else {
      return (
        <Connexion onClick={this.verifierConnexion} />
      )
    }
  }

  render() {
    return (
      <div className="App">
        <Container fluid>
          {this.gererConnexion()}
        </Container>
      </div>
      );
  }
  
}


export default App;
