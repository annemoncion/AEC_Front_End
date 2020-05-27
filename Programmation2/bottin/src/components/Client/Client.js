import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export class Client extends React.Component {

    render() {
        let image = {
            src: this.props.src,
            alt: this.props.alt,
            title: this.props.title
        }

        let courriel = {
            href: "mailto:" + this.props.courriel
        }

        let telephone = {
            lienTel: 'tel:+1- ' + this.props.codeRegional + '-' + this.props.telephone,
            afficheTel: '(' + this.props.codeRegional + ') ' + this.props.telephone
        }

        return (
           <Col sm="6" md="4" xl="2">
            <Card style={{ maxWidth: '18rem' }}>
                <Card.Img 
                    variant="top" 
                    src={image.src}
                    alt={image.alt}
                    title={image.title} 
                />
                <Card.Body>
                    <Card.Title>{this.props.nom}</Card.Title>
                    <Card.Subtitle>{this.props.profession}</Card.Subtitle>
                    <ListGroup variant="flush">
                        <ListGroup.Item><a href={courriel.href}>{this.props.courriel}</a></ListGroup.Item>
                        <ListGroup.Item><a href={telephone.lienTel}>{telephone.afficheTel}</a></ListGroup.Item>
                        <ListGroup.Item>{this.props.adresse}</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
            </Col> 
        ); 
    }
}