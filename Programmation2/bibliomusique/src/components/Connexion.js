import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../img/logo.svg';

export class Connexion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {identifiant: '', motDePasse: ''};

        this.handleConnexion = this.handleConnexion.bind(this);
    }

    handleConnexion() {
        let connecter = false;

        if (this.state.identifiant === 'shany' && this.state.motDePasse === 'patate') {
            connecter = true;
        }

        this.props.onClick(connecter);
    }

    render() {
        return (
            <Form className="connexion">
                <div className="inside-connexion">
                    <Row>
                        <Col>
                            <figure className="contenantLogo">
                                <img className="logo" src={Logo} alt="Note de musique" />
                            </figure>
                            <h1 className="titreConnexion">Découvrez la musique des artistes d'ici</h1>
                        </Col>
                    </Row>
                    <Form.Group as={Row} controlId="formIdentifiant">
                    <Form.Label column sm="2" md="3">Identifiant</Form.Label>
                    <Col sm="10" md="9">
                        <Form.Control 
                            type="text" 
                            value={this.state.identifiant}
                            onChange={(e) => this.setState({identifiant: e.target.value})}
                        />
                        <small>Identifiant: shany</small>
                    </Col>
                    
                </Form.Group>
                <Form.Group as={Row} controlId="formMotDePasse">
                    <Form.Label column sm="2" md="3">Mot de passe</Form.Label>
                    <Col sm="10" md="9">
                        <Form.Control 
                            type="password" 
                            value={this.state.motDePasse}
                            onChange={(e) => this.setState({motDePasse: e.target.value})}
                        />
                        <small>Mot de passe: patate</small>
                    </Col>
                </Form.Group>

                <Button className="btn-connexion" variant="primary" onClick={this.handleConnexion}>
                    Se connecter
                </Button>
                </div>
                
            </Form>
        );
    }
}