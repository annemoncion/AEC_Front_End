import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

export class Recherche extends React.Component {
    constructor(props) {
        super(props);
        this.state = {recherche:''};

        this.handleRecherche = this.handleRecherche.bind(this);
        this.annulerRecherche = this.annulerRecherche.bind(this);
    }

    handleRecherche(event) {
        let inputRecherche = event.target.value;

        this.setState({recherche:inputRecherche});
        this.props.filtre(event.target.value);

    }

    annulerRecherche(event) {
        let inputRecherche = document.getElementById('inputRecherche');
        
        inputRecherche.target.value = '';
        this.props.filtre('');

        event.preventDefault();
    }

    render() {
        return (
            <Form>
                <Row>
                    <Col md={{ span: 4, offset: 4 }} className="recherche">
                           <Form.Group>
                                <Form.Label>Filtrer les clients</Form.Label>
                                <Form.Control 
                                    id="inputRecherche"
                                    type="text"
                                    onChange={this.handleRecherche}
                                />
                                <button onClick={this.annulerRecherche}>Annuler</button>
                            </Form.Group>                       
                    </Col>
                </Row>
            </Form>
        );
    }
}