import React from "react";
import { Container, Row, Col} from "react-bootstrap";

function APropos(props) {

  return (
    <>
    <Container fluid className="aPropos">
      <Row>
        <Col sm={{span: 10, offset: 1}} md={{span: 6, offset: 2}} lg={{span: 5, offset: 2}} xl={{span: 4, offset: 3}} className="colTexte">
          <div className="gForme cercle"></div>
          <div className="apercuPlante">
            <h2>Un portfolio illustratif</h2>
            <p>Toutes les illustrations présentées ont été réalisées par moi-même, par temps libre ou sur commande. Dans les sites web que je conçois, j’explore beaucoup le contraste entre les illustrations traditionnelles et la fluidité du numérique.</p>
          </div>
        </Col>
        <Col sm={{span: 10, offset: 1}} md={{span: 6, offset: 4}} lg={{span: 5, offset: 4}} xl={{span: 4, offset: 5}} className="colTexte">
        <div className="gForme rectangle"></div>
          <div className="apercuPlante">
            <h2>Des interactions ludiques</h2>
            <p>L’idée est de naviguer à travers le portfolio en créant vos propres montages visuels. La composition d’ensemble changera au fil de vos interactions. Il s’agit d’un processus à la fois contemplatif et vivant, pour ranimer la capacité d’émerveillement devant la complexité de la nature et la simplicité de ses formes.</p>
          </div>
        </Col>
        <Col sm={{span: 10, offset: 1}} md={{span: 6, offset: 6}} lg={{span: 5, offset: 6}} xl={{span: 4, offset: 7}} className="colTexte">
        <div className="gForme triangle"></div>
          <div className="apercuPlante">
            <h2>Un projet évolutif</h2>
            <p>Je suis illustratice, mais aussi programmeure front end. Ce projet a été réalisé avec React. Y est intégrée la librairie d’animation Anime, qu’il ne me tarde d’explorer plus en profondeur. J’ai donc construit ce terrain de jeu, pour que, de l’autre côté de l’écran, je puisse aussi procéder à mes propres explorations. Je souhaite enrichir la librairie d’animations au fil de mes apprentissages, afin de rendre cette application de plus en plus flexible.</p>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default APropos;
