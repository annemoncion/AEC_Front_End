import React from "react";
import {Container, Row, Col} from "react-bootstrap";
 
export class Accueil extends React.Component { 

    render() { 

        return ( 
            <> 
            <Container>
                <Row>
                    <Col md="8" className="mb-4">
                        <h1 className="mt-4 mb-4">La Baie géorgienne</h1>
                        <p>Partie intégrante du majestueux lac Huron, la baie Georgienne s’étend sur 15 000 km2 et s’ouvre vers l’ouest entre la péninsule Bruce et l’île Manitoulin. La baie est parsemée de plus de 30 000 îlots, comme autant de récifs à fleur d’eau, sous la veille ininterrompue de 32 phares qui témoignent d’un riche patrimoine marin. Entourée par près de 2000 km de littoral, la baie compte parmi les eaux les plus claires de la région des Grands Lacs.</p>
                    </Col>
                    <Col md="12">
                        <img src={require('../img/accueil-baie-georgienne.jpg')} alt="parc provincial iles-de-la-baie-georgienne" />
                    </Col>
                </Row>
            </Container>
            </> 

        ); 
    }
}