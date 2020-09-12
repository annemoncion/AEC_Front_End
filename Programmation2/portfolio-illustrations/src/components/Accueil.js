import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import ManagePlantes from './ManagePlantes';
 
function Accueil(props) { 
    return ( 
        <> 
        <Container fluid>
            <Row>
                <Col md={{ span:6, offset:3 }} className="mb-6">
                    <ManagePlantes/>
                </Col>
            </Row>
        </Container>
        </> 

    ); 
}

export default Accueil;