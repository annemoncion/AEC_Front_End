import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

export class AjoutClient extends React.Component {
    constructor(props) {
        super(props);
        this.state = {nom:'', profession:'', courriel:'', codeRegional:'', telephone:'', adresse:''};

        this.handleAjoutInfos = this.handleAjoutInfos.bind(this);
    }

    handleAjoutInfos(event) {
        event.preventDefault();

        this.props.infosClient({
            nom: this.state.nom,
            profession: this.state.profession,
            courriel: this.state.courriel,
            codeRegional: this.state.codeRegional,
            telephone: this.state.telephone,
            adresse: this.state.adresse
        });

        this.setState({nom:''});
        this.setState({profession:''});
        this.setState({courriel:''});
        this.setState({codeRegional:''});
        this.setState({telephone:''});
        this.setState({adresse:''});
    }

    render() {
        return (
            <Form>
                <Row>
                    <Col md={{ span: 4, offset: 4 }} className="recherche">
                        <h2>Ajouter un client</h2>
                        <Form.Group controlId="nom">
                            <Form.Label>Nom</Form.Label>
                            <Form.Control
                                type="text"
                                value={this.state.nom}
                                onChange={(e) => this.setState({nom: e.target.value})}
                            />
                        </Form.Group>
                        <Form.Group controlId="profession">
                            <Form.Label>Profession</Form.Label>
                            <Form.Control
                                type="text"
                                value={this.state.profession}
                                onChange={(e) => this.setState({profession: e.target.value})}
                            />
                        </Form.Group>
                        <Form.Group controlId="courriel">
                            <Form.Label>Courriel</Form.Label>
                            <Form.Control
                                type="text"
                                value={this.state.courriel}
                                onChange={(e) => this.setState({courriel: e.target.value})}
                            />
                        </Form.Group>
                        <Form.Group controlId="telphone">
                            <Form.Label>Code regional</Form.Label>
                            <Form.Control
                                type="text"
                                value={this.state.codeRegional}
                                onChange={(e) => this.setState({codeRegional: e.target.value})}
                            />
                            <Form.Label>Telephone</Form.Label>
                            <Form.Control
                                type="text"
                                value={this.state.telephone}
                                onChange={(e) => this.setState({telephone: e.target.value})}
                            />
                        </Form.Group>
                        <Form.Group controlId="adresse">
                            <Form.Label>Adresse</Form.Label>
                            <Form.Control
                                type="text"
                                value={this.state.adresse}
                                onChange={(e) => this.setState({adresse: e.target.value})}
                            />
                        </Form.Group>
                        <button onClick={this.handleAjoutInfos}>Ajouter</button>
                        
                    </Col>
                </Row>
            </Form>
        );
    }
}