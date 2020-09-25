import React from "react";
import { Container, Row, Col, Button} from "react-bootstrap";

function IntroAjouter(props) {

  return (
    <>
    <Container fluid className="vueSeule">
      <Row>
      <Col sm="12" md={{ span: 6, offset: 1 }} className="colApercu">
          <div className="apercuPlante">
            <Button onClick={() => props.gestionApercu(props.titre)} className="btnForm btnGrand">
                Sélectionnez une illustration
            </Button>
          </div>
        </Col>
        <Col md={{span: 4, offset: 7}}>
          <div className="formulaireModif">
            <p>Pour commencer, sélectionner une illustration de mon portfolio. Vous pourrez ensuite créer un montage visuel à partir de cette illustration.</p>
          </div>
        </Col> 
      </Row>
    </Container>
    </>
  );
}

export default IntroAjouter;