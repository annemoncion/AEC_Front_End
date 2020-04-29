import React from 'react';
import Col from 'react-bootstrap/Col';
import lotr from '../../img/lotr1.jpg';

export class TvShow extends React.Component {
    render() {
        let image = {
            src: lotr,
            alt: "Seigneur des anneaux 1",
            title: "Seigneur des anneaux 1"
        };
        return (
            <Col lg="2">
                <img className="img-fluid" src={image.src} alt={image.alt} title={image.title} />
            </Col>
        );
    }
}