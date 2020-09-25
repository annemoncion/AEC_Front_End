import React from "react"; 
import {Container, Row, Col} from "react-bootstrap" 
import {Link} from 'react-router-dom' 
 
export class Footer extends React.Component { 

    render() { 
        return ( 
            <> 
            <Container fluid className="footer"> 
                <Row>
                    <Col sm="12">
                        <Link exact="true" to="/" className="btn btn-primary">Retour à l'accueil</Link> 
                    </Col>
                </Row>
            </Container> 
            </> 

        ); 
    }
}