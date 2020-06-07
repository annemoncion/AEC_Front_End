import React from 'react';
import Button from 'react-bootstrap/Button';

export class Deconnexion extends React.Component {

    constructor(props) {
        super(props);

        this.handleDeconnexion = this.handleDeconnexion.bind(this);
    }

    handleDeconnexion() {
        let connecter = false;
        this.props.onClick(connecter);
    }

    render() {
        return (
            <Button variant="primary" onClick={this.handleDeconnexion}>
                Se déconnecter
            </Button>
        );
    }
}