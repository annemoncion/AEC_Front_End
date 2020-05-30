import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class Connexion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {motDePasse:''};

        this.handleConnexion = this.handleConnexion.bind(this);
    }

    handleConnexion() {
        let connecter = false;
        if (this.state.motDePasse === "Alibaba") {
            connecter = true;
        }
        this.props.onClick(connecter);
    }

    render() {
        return (
            <Form>
                <Row>
                    <Col md={{ span: 4, offset: 4 }} className="motDePasse">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control 
                                type="password" 
                                value={this.state.motDePasse}
                                onChange={(e) => this.setState({motDePasse: e.target.value})}
                            />
                        </Form.Group>

                        <Button variant="primary" onClick={this.handleConnexion}>
                            Se connecter
                        </Button>
                    </Col>
                </Row>
            </Form>
        );

    }
}