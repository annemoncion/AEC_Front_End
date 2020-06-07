import React from 'react';
import Form from 'react-bootstrap/Form';

export class Recherche extends React.Component {
    constructor(props) {
        super(props);

        this.handleRecherche = this.handleRecherche.bind(this);
    }

    handleRecherche(event) {
        let inputRecherche = event.target.value;
        this.props.filtre(inputRecherche);
    }

    preventSubmit(event) {
        if(event.keyCode === 13) {
            event.preventDefault();
            return false;
          }
    }

    render() {
        return (
            <Form>
                <Form.Group className="recherche">
                    <Form.Control 
                        id="inputRecherche"
                        type="text"
                        onChange={this.handleRecherche}
                        onKeyDown={this.preventSubmit}
                        placeholder="Recherche..."
                    />
                </Form.Group>                       
            </Form>
        );
    }
}