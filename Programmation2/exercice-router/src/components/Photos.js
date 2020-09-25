import React from "react";
import {Container, Row, Col} from "react-bootstrap";
 
export class Photos extends React.Component { 

    render() { 

        return ( 
            <> 
            <Container fluid>
                <Row>
                    <Col md="3">
                        <img className="img-fluid" src={require('../img/photo1.jpg')} alt="baie géorgienne" />
                    </Col>
                    <Col md="3">
                        <img className="img-fluid" src={require('../img/photo2.jpg')} alt="baie géorgienne" />
                    </Col>
                    <Col md="3">
                        <img className="img-fluid" src={require('../img/photo3.jpg')} alt="baie géorgienne" />
                    </Col>
                    <Col md="3">
                        <img className="img-fluid" src={require('../img/photo4.jpg')} alt="baie géorgienne" />
                    </Col>
                </Row>
                <Row>
                    <Col md="3">
                        <img className="img-fluid" src={require('../img/photo5.jpg')} alt="baie géorgienne" />
                    </Col>
                    <Col md="3">
                        <img className="img-fluid" src={require('../img/photo6.jpg')} alt="baie géorgienne" />
                    </Col>
                    <Col md="3">
                        <img className="img-fluid" src={require('../img/photo7.jpg')} alt="baie géorgienne" />
                    </Col>
                    <Col md="3">
                        <img className="img-fluid" src={require('../img/photo8.jpg')} alt="baie géorgienne" />
                    </Col>
                </Row>
                <Row>
                    <Col md="3">
                        <img className="img-fluid" src={require('../img/photo9.jpg')} alt="baie géorgienne" />
                    </Col>
                    <Col md="3">
                        <img className="img-fluid" src={require('../img/photo10.jpg')} alt="baie géorgienne" />
                    </Col>
                    <Col md="3">
                        <img className="img-fluid" src={require('../img/photo11.jpg')} alt="baie géorgienne" />
                    </Col>
                    <Col md="3">
                        <img className="img-fluid" src={require('../img/photo12.jpg')} alt="baie géorgienne" />
                    </Col>
                </Row>
            </Container>
            </> 

        ); 
    }
}