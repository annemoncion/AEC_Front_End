import React from "react";
import { Container, Row, Col} from "react-bootstrap";

const listePlantes = [
    {
      id: 1,
      nomCommun: "Aubépine suborbiculaire",
      nomLatin: "Crataegus Suborbiculata",
      urlImage: "aubepine_suborbiculaire"
    },
    {
      id: 2,
      nomCommun: "Bleuetier sauvage",
      nomLatin: "Vaccinium angustifolium",
      urlImage: "bleuetier"
    },
    {
      id: 3,
      nomCommun: "Cerisier de Pensylvanie",
      nomLatin: "Prunus pensylvanica",
      urlImage: "cerisier_de_pensylvanie"
    },
    {
      id: 4,
      nomCommun: "Épilobe à feuilles étroites",
      nomLatin: "Epilobium angustifolium",
      urlImage: "epilobe_a_feuilles_etroites2"
    },
    {
      id: 5,
      nomCommun: "Épnette noire",
      nomLatin: "Picea mariana",
      urlImage: "epinette_noire"
    },
    {
      id: 6,
      nomCommun: "Famboisier",
      nomLatin: "Rubus idaeus L.",
      urlImage: "framboisier"
    },
    {
      id: 7,
      nomCommun: "Iris versicolore",
      nomLatin: "Iris versicolor",
      urlImage: "iris_versicolore"
    },
    {
      id: 8,
      nomCommun: "Matricaire odorante",
      nomLatin: "Matricaria matricarioides",
      urlImage: "matricaire_odorante"
    },
    {
      id: 9,
      nomCommun: "Pissenlit",
      nomLatin: "Taraxacum officinale",
      urlImage: "pissenlit"
    },
    {
      id: 10,
      nomCommun: "Rosier cent-feulles",
      nomLatin: "Rosa ×centifolia",
      urlImage: "rosier_cent-feuilles"
    },
    {
      id: 11,
      nomCommun: "Trèfle rouge",
      nomLatin: "Trifolium pratense",
      urlImage: "trefle_rouge"
    },
    {
      id: 12,
      nomCommun: "Usnée barbue",
      nomLatin: "Usnea barbata",
      urlImage: "usnee_barbue"
    },
    {
      id: 13,
      nomCommun: "Viorne cassinoïde",
      nomLatin: "Viburnum nudum var. cassinoides",
      urlImage: "viorne_cassinoide"
    },
  ]

const baseUrl = "https://annemoncion.com/img/illustrations/plantes/fond-transparent/";

function Mediatheque (props) {

    function handleSelectionImage (nouveauNomCommun, nouveauNomLatin, nouveauUrlImage) {
        props.gestionNomCommun(nouveauNomCommun);
        props.gestionNomLatin(nouveauNomLatin);
        props.gestionUrlImage(nouveauUrlImage);
        props.gestionApercu(nouveauNomCommun);
    }

    function gestionApercu (dernierNomCommun) {
      props.gestionApercu(dernierNomCommun);
    }
    
      return (
            <Container fluid className="mediatheque">
                <Row>
                    <Col lg="12" xl={{span: 8, offset: 2}} className="interieurMediatheque">
                      <div className="contenantIntro">
                        <p>Parcourez mon portfolio et sélectionnez une illustration pour créer un nouveau montage visuel.</p>
                      </div>
                      <div onClick={() => gestionApercu(props.titre)} className="btnFermer">
                        <div className="bar barUn"></div>
                        <div className="bar barDeux"></div>
                      </div>
                        
                        {Object.keys(listePlantes).map(key => (
                            <div key={key} className="contenantImage" onClick={() => handleSelectionImage(listePlantes[key].nomCommun, listePlantes[key].nomLatin, listePlantes[key].urlImage)}>
                              <img 
                                key={key} 
                                alt={listePlantes[key].nomCommun}
                                src={baseUrl + listePlantes[key].urlImage + ".png"} 
                              />
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        );
}

export default Mediatheque;