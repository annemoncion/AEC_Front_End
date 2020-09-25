import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import ManagePlantes from './ManagePlantes';
 
function Accueil(props) { 
    return ( 
        <> 
        <Container fluid>
            <Row>
                <Col className="grandContenantGrille mb-6" sm={{ span:10, offset:1 }}md={{ span:12, offset:0 }} lg={{ span:10, offset:1 }} xl={{ span:8, offset:2 }}>
                    <ManagePlantes/>
                </Col>
            </Row>
        </Container>
        </> 

    ); 
}

export default Accueil;