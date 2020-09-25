import React, {useState} from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Plante from "./Plante.js";
import poubelle from "../img/icone-poubelle.svg";
import iconeMagie from "../img/icone-magie.svg";

const animations = [
    {
      id : 1,
      valeur : "vide",
      nom: "Aucune"
    },
    {
      id : 2,
      valeur : "eventail",
      nom: "Éventail"
    },
    {
      id : 3,
      valeur : "hypnose",
      nom: "Hypnose"
    },
    {
      id : 4,
      valeur : "trianglesEnFile",
      nom: "Triangles en file"
    }
  ];

function Montage(props) {
  const [etatMontage, setEtatMontage] = useState("mobileCacher");

  function handleNomCommun(e) {
    props.gestionNomCommun(e.target.value);
  };
  
  function handleNomLatin(e) {
      props.gestionNomLatin(e.target.value);
  };

  function handleCouleurBg(e) {
    props.gestionCouleurBg(e.target.value);
  };
  
  function handleTypeVisuel(typeVisuel) {
    props.gestionTypeVisuel(typeVisuel);
  };

  function handleTypeForme(e) {
    props.gestionTypeForme(e.target.value);
  };

  function handleCouleurForme(e) {
    props.gestionCouleurForme(e.target.value);
  };

  function handleEtendue(e) {
    props.gestionFormeEtendue(e.target.value);
  };

  function handleProfondeurForme(e) {
    const zindex = parseInt(e.target.value);
    props.gestionProfondeurForme(zindex);
  };

  function handleRangeLargeur(e) {
    props.gestionLargeurForme(e.target.value);
  };

  function handleRangeHauteur(e) {
    props.gestionHauteurForme(e.target.value);
  };

  function handleRangePosX(e) {
    props.gestionPosXForme(e.target.value);
  };

  function handleRangePosY(e) {
    props.gestionPosYForme(e.target.value);
  };

  function handleChoixAnimation(e) {
    props.gestionNomAnimation(e.target.value);
  };

  function handleProfondeurAnimation(e) {
    const zindex = parseInt(e.target.value);
    props.gestionProfondeurAnimation(zindex);
  };

  function handleMontage (etat) {
    setEtatMontage(etat);
    props.etatMontage(etat);
  }

  return (
    <>
    <Container fluid className="vueSeule">
      <Button aria-label="Modifier le visuel" onClick={() => handleMontage("mobileActiver")} className={"btnMontage btnMobile gauche " + (etatMontage === "mobileCacher" ? "actif" : "cacher")} >
        <img src={iconeMagie} alt="Modifier le visuel" />
      </Button>
      <Row>

        <Col sm="12" md={{ span: 6, offset: 0 }} xl={{ span: 6, offset: 1 }} className={"colApercu " + (etatMontage === "mobileActiver" ? "apercuTransparent" : "")}>
          <div className="apercuPlante">
            <Plante
              idPerso={props.idPerso}
              titre={props.titre}
              image={props.image}
              couleurBg={props.couleurBg}
              animationActive={props.animationActive}
              nomAnimation={props.nomAnimation}
              profondeurAnimation={props.profondeurAnimation}
              formeActive={props.formeActive}
              typeForme={props.typeForme}
              formeEtendue={props.formeEtendue}
              couleurForme={props.couleurForme}
              profondeurForme={props.profondeurForme}
              largeurForme={props.largeurForme}
              hauteurForme={props.hauteurForme}
              posXForme={props.posXForme}
              posYForme={props.posYForme} />
          </div>
        </Col>

        <Col md={{span: 6, offset: 6}} xl={{span: 4, offset: 7}}>
          <Form className="formulaireModif">

            <Row className={"sectionUrl " + (etatMontage === "mobileActiver" ? "cacher" : "actif")}>
              <Col lg="8" className="contenantAdresseUrl">
                <Form.Group controlId="image" aria-label="adresse url" className="adresseUrl">
                  <Form.Control type="text" placeholder="Sélectionner l'url dans la bibliothèque" defaultValue={props.image} disabled/>
                </Form.Group>
              </Col>
              <Col lg="4" className="contenantBtnUrl">
                <Button className="btnForm" onClick={() => props.gestionApercu(props.titre)}>
                    Changer l'illustration
                </Button>
              </Col>
            </Row>

            <Row className={"sectionNom " + (etatMontage === "mobileActiver" ? "cacher" : "actif")}>
              <Col lg="6">
                <Form.Group controlId="nomCommun">
                  <Form.Label>Nom commun</Form.Label>
                  <Form.Control type="text" defaultValue={props.titre} onChange={handleNomCommun}/>
                </Form.Group>
              </Col>
              <Col lg="6">
                <Form.Group controlId="nomLatin">
                  <Form.Label>Nom latin</Form.Label>
                  <Form.Control type="text" defaultValue={props.nomLatin} onChange={handleNomLatin}/>
                </Form.Group>
              </Col>
            </Row>

            <Row className={"optionsMontage " + (props.typeVisuel === "modifAnimation" ? "animation" : "formes") + " " + (etatMontage === "mobileActiver" ? "actif" : "cacher")}>
              <Col xs={5} md={6} className="titreTypeVisuel" choix={props.typeVisuel}>
                <Button onClick={() => handleTypeVisuel('formes')} className={"btnChoix btnFormes " + (props.typeVisuel === "formes" && "actif")}>Montage statique</Button>
              </Col>
              <Col xs={2} className="contenantBtnFermer">
                <div onClick={() => handleMontage("mobileCacher")} className={"btnFermer " + (etatMontage === "mobileActiver" ? "actif" : "cacher")}>
                  <div className="bar barUn"></div>
                  <div className="bar barDeux"></div>
                </div>
              </Col>
              <Col xs={5} md={6} className="titreTypeVisuel" choix={props.typeVisuel}>
                <Button onClick={() => handleTypeVisuel('animation')} className={"btnChoix btnAnimation " + (props.typeVisuel === "animation" && "actif")}>Animation</Button>
              </Col>

              <Col sm="4" md="6" className={"champsConditionnels champsHaut champsAnimation " + (props.typeVisuel === "animation" ? "actif" : "")}>

                <Form.Group controlId="animationProfondeur">
                  <Form.Label>Position</Form.Label>
                  <Form.Check
                    inline
                    type="radio"
                    id="profondeurAnimation1"
                    className={"labelRadio " + (props.profondeurAnimation === 1 ? "selectionLabel" : "")}
                    label="Derrière"
                    value="1"
                    name="profondeurAnimation"
                    checked={props.profondeurAnimation === 1} 
                    onChange={handleProfondeurAnimation}
                  />

                  <Form.Check
                    inline
                    type="radio"
                    id="profondeurAnimation2"
                    className={"labelRadio " + (props.profondeurAnimation === 2 ? "selectionLabel" : "")}
                    label="Devant"
                    value="2"
                    name="profondeurAnimation"
                    checked={props.profondeurAnimation === 2}
                    onChange={handleProfondeurAnimation}
                  />
                </Form.Group>

                </Col>
                <Col sm="4" md="6" className={"champsConditionnels champsHaut champsAnimation " + (props.typeVisuel === "animation" ? "actif" : "")}>

                <Form.Group controlId="animationNom">
                  <Form.Label>Choix d'animation</Form.Label>
                  <Form.Control as="select" value={props.choixAnimation} onChange={handleChoixAnimation}>
                    {Object.keys(animations).map(key => (
                      <option key={key} value={animations[key].valeur}>
                        {animations[key].nom}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>

              </Col>

              <Col xs="4" sm="2" md="4" className={"champsConditionnels champsHaut champsFormes " + (props.typeVisuel === "formes" ? "actif" : "")}>

                <Form.Group controlId="formeType" className="groupeInline">
                  <Form.Label>Forme</Form.Label>
                  <Form.Check
                    inline
                    type="radio"
                    id="typeFormeTriangle"
                    className={"inputForme inputPastille " + (props.typeForme === 'triangle' ? "selection" : "")}
                    aria-label="triangle"
                    value="triangle"
                    name="typeForme"
                    checked={props.typeForme === 'triangle'} 
                    onChange={handleTypeForme}
                  />

                  <Form.Check
                    inline
                    type="radio"
                    id="typeFormeCercle"
                    className={"inputForme inputPastille " + (props.typeForme === 'cercle' ? "selection" : "")}
                    aria-label="cercle"
                    value="cercle"
                    name="typeForme"
                    checked={props.typeForme === 'cercle'}
                    onChange={handleTypeForme}
                  />

                  <Form.Check
                    inline
                    type="radio"
                    id="typeFormeRect"
                    className={"inputForme inputPastille " + (props.typeForme === 'rectangle' ? "selection" : "")}
                    aria-label="rectangle"
                    value="rectangle"
                    name="typeForme"
                    checked={props.typeForme === 'rectangle'}
                    onChange={handleTypeForme}
                  />
                </Form.Group>
              </Col>

              <Col xs="4" sm="2" md="4" className={"champsConditionnels champsHaut champsFormes " + (props.typeVisuel === "formes" ? "actif" : "")}>
                <Form.Group controlId="formeCouleur">
                  <Form.Label>Couleur</Form.Label>
                  <Form.Check
                    inline
                    type="radio"
                    id="couleurForme1"
                    className={"inputCouleur inputPastille blanc " + (props.couleurForme === '#fff' ? "selectionCouleur" : "")}
                    aria-label="blanc"
                    value="#fff"
                    name="couleurForme"
                    checked={props.couleurForme === '#fff'} 
                    onChange={handleCouleurForme}
                  />

                  <Form.Check
                    inline
                    type="radio"
                    id="couleurForme2"
                    className={"inputCouleur inputPastille noir " + (props.couleurForme === '#000' ? "selectionCouleur" : "")}
                    aria-label="noir"
                    value="#000"
                    name="couleurForme"
                    checked={props.couleurForme === '#000'}
                    onChange={handleCouleurForme}
                  />
                </Form.Group>
              </Col>

              <Col xs="4" sm="2" md="4" className="champsConditionnels champsHaut actif">
                <Form.Group controlId="couleurBg">
                  <Form.Label>Arrière-plan</Form.Label>
                  <Form.Check
                    inline
                    type="radio"
                    id="couleurBg1"
                    className={"inputCouleur inputPastille blanc " + (props.couleurBg === 'blanc' ? "selectionCouleur" : "")}
                    aria-label="blanc"
                    value="blanc"
                    name="couleurBg"
                    checked={props.couleurBg === 'blanc'}
                    onChange={handleCouleurBg}
                  />

                  <Form.Check
                    inline
                    type="radio"
                    id="couleurBg2"
                    className={"inputCouleur inputPastille noir " + (props.couleurBg === 'noir' ? "selectionCouleur" : "")}
                    aria-label="noir"
                    value="noir"
                    name="couleurBg"
                    checked={props.couleurBg === 'noir'}
                    onChange={handleCouleurBg}
                  />  
                </Form.Group>
              </Col>

              <Col xs="6" sm="3" md="6" className={"champsConditionnels champsHaut champsFormes " + (props.typeVisuel === "formes" ? "actif" : "")}>
                <Form.Group controlId="formeEtendue">
                  <Form.Label>Cadre</Form.Label>

                  <Form.Check
                    inline
                    type="radio"
                    id="etendue2"
                    className={"labelRadio " + (props.formeEtendue === "false" ? "selectionLabel" : "")}
                    label="Devant"
                    value="false"
                    name="etendue"
                    checked={props.formeEtendue === "false"}
                    onChange={handleEtendue}
                  />

                  <Form.Check
                    inline
                    type="radio"
                    id="etendue1"
                    className={"labelRadio " + (props.formeEtendue === "true" ? "selectionLabel" : "")}
                    label="Derrière"
                    value="true"
                    name="etendue"
                    checked={props.formeEtendue === "true"} 
                    onChange={handleEtendue}
                  />
                </Form.Group>
              </Col>

              <Col xs="6" sm="3" md="6" className={"champsConditionnels champsHaut champsFormes " + (props.typeVisuel === "formes" ? "actif" : "")}>
                <Form.Group controlId="formeProfondeur">
                  <Form.Label>Illustration</Form.Label>
                  <Form.Check 
                    inline
                    type="radio"
                    id="profondeurForme1"
                    className={"labelRadio " + (props.profondeurForme === 1 ? "selectionLabel" : "")}
                    label="Devant"
                    value="1"
                    name="profondeurForme"
                    checked={props.profondeurForme === 1} 
                    onChange={handleProfondeurForme}
                  />

                  <Form.Check
                    inline
                    type="radio"
                    id="profondeurForme2"
                    className={"labelRadio " + (props.profondeurForme === 2 ? "selectionLabel" : "")}
                    label="Derrière"
                    value="2"
                    name="profondeurForme"
                    checked={props.profondeurForme === 2}
                    onChange={handleProfondeurForme}
                  />
                </Form.Group>
                </Col>
                <Col sm="12" className={"champsConditionnels champsFormes champsHaut " + (props.typeVisuel === "formes" ? "actif" : "")}>

                <Form.Group controlId="formeLargeur">
                  <Form.Label>Largeur</Form.Label>
                  <Form.Control type="range" name="largeur" min="5" max="600" value={props.rangeLargeur} onChange={handleRangeLargeur} />
                </Form.Group>

                <Form.Group controlId="formeHauteur" className={props.typeForme === "cercle" ? "cacher" : "actif"}>
                  <Form.Label>Hauteur</Form.Label>
                  <Form.Control type="range" name="hauteur" min="5" max="600" value={props.rangeHauteur} onChange={handleRangeHauteur} />
                </Form.Group>

                <Form.Group controlId="formePosX">
                  <Form.Label>Position horizontale</Form.Label>
                  <Form.Control type="range" name="posX" min="0" max="100" value={props.rangePosX} onChange={handleRangePosX} />
                </Form.Group>

                <Form.Group controlId="formePosY">
                  <Form.Label>Position verticale</Form.Label>
                  <Form.Control type="range" name="posY" min="0" max="100" value={props.rangePosY} onChange={handleRangePosY} />
                </Form.Group>

              </Col>
            </Row>

            <Row className={"sectionBoutons " + (etatMontage === "mobileActiver" ? "cacher" : "actif")}>
              <Col xs="10" lg="8" className={"contenantBtnBas " + (props.section === "ajouter" ? "actif" : "cacher")}>
                <Button variant="primary" type="submit" onClick={props.ajouterMontage} className={"btnForm " + (props.section === "ajouter" ? "actif" : "cacher")}>
                    Enregistrer
                </Button>
              </Col>
              <Col xs="10" lg="8" className="contenantBtnBas">
                <Button type="submit" onClick={props.editerMontage} className={"btnForm " + (props.section === "editer" ? "actif" : "cacher")}>
                  Modifier le montage
                </Button>
              </Col>
              <Col xs="2" lg="4" className="contenantBtnSupr">
                <Button type="submit" onClick={props.supprimerMontage} className={"btn-danger " + (props.section === "editer" ? "actif" : "cacher")}>
                  <img src={poubelle} alt="supprimer" />
                </Button>
              </Col>
            </Row>

            
                
            

            

          </Form>  
        </Col> 
      </Row>
    </Container>
    </>
  );
}

export default Montage;