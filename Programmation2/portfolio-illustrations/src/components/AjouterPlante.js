import React, {useState} from "react";
import Montage from "./Montage.js";
import IntroAjouter from "./IntroAjouter";
import Mediatheque from "./Mediatheque.js";
import {API} from "../constantes.js";
import {toast} from "react-toastify";

const baseUrl = "https://annemoncion.com/img/illustrations/plantes/fond-transparent/";

const idPlante = 1;

const gestionApercu = {
  introAjouter: IntroAjouter,
  mediatheque: Mediatheque,
  montage: Montage
};

function AjouterPlante(props) {
  const [etatApercu, setEtatApercu] = useState("introAjouter");
  const [image, setImage] = useState(baseUrl);
  const [nomCommun, setNomCommun] = useState("vide");
  const [nomLatin, setNomLatin] = useState("");
  const [couleurBg, setCouleurBg] = useState("blanc");
  const [typeVisuel, setTypeVisuel] = useState("formes");
  const [formesActif, setFormesActif] = useState(true);
  const [animationActif, setAnimationActif] = useState(false);
  const [choixAnimation, setChoixAnimation] = useState("vide");
  const [profondeurAnimation, setProfondeurAnimation] = useState(1);
  const [typeForme, setTypeForme] = useState("triangle");
  const [couleurForme, setCouleurForme] = useState("#000");
  const [etendue, setEtendue] = useState(false);
  const [profondeurForme, setProfondeurForme] = useState(1);
  const [rangeLargeur, setRangeLargeur] = useState(300);
  const [rangeHauteur, setRangeHauteur] = useState(300);
  const [rangePosX, setRangePosX] = useState(50);
  const [rangePosY, setRangePosY] = useState(50);

  async function ajouterPlante(elNomCommun, elNomLatin, elCouleurBg, elImage, elAnimationActif, elAnimationNom, elAnimationProfondeur, elFormesActif, elFormeType, elFormeProfondeur, elFormeEtendue, elFormeHauteur, elFormeLargeur, elFormeCouleur, elFormePosX, elFormePosY) { 
    try{ 
      const response = await fetch(API, { 
        method:'POST', 
        headers: {'Content-Type': 'application/json'  }, 
        body:JSON.stringify({
          nomCommun: elNomCommun, 
          nomLatin: elNomLatin, 
          couleurBg: elCouleurBg,
          image: elImage,
          animation:{
            actif: elAnimationActif,
            nom: elAnimationNom,
            profondeur: elAnimationProfondeur
          },
          formes:{
            actif: elFormesActif,
            type: elFormeType,
            profondeur: elFormeProfondeur,
            etendue: elFormeEtendue,
            hauteur: elFormeHauteur,
            largeur: elFormeLargeur,
            couleur: elFormeCouleur,
            posY: elFormePosY,
            posX: elFormePosX
          }
        }) 
      }); 
      if(response.ok){ 
        props.history.push("/"); //Revenir à l'accueil
        toast.success("Ajout du montage " + elNomCommun);

        return response; 
      } 
      throw new Error('Request failed!'); 
  } 
   catch(error){ 
      console.log(error); 
   } 
}
  //Retourne le prochain ID pour savoir où ajouter crudcrud pas besoin
  /*async function getID() {
    try {
      let nextID = 0 
      const response = await fetch(API);
      const reponseDeApi = await response.json();
      for (let i=0;i<reponseDeApi.length;i++){
        if(reponseDeApi[i].id > nextID){
            nextID = reponseDeApi[i].id;
        }
      }   
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return nextID+1;
    } catch (error) {
      console.log(error);
    }
  }*/

  function handleAjouterMontage(event) {
    event.preventDefault();
    
    const elNomCommun = nomCommun;
    const elNomLatin = nomLatin;
    const elImage = image;
    const elCouleurBg = couleurBg;
    const elAnimationActif = animationActif;
    const elAnimationNom = choixAnimation;
    const elAnimationProfondeur = profondeurAnimation;
    const elFormesActif = formesActif;
    const elFormeType = typeForme;
    const elFormeProfondeur = profondeurForme;
    const elFormeEtendue = etendue;
    const elFormeHauteur = rangeHauteur;
    const elFormeLargeur = rangeLargeur;
    const elFormeCouleur = couleurForme;
    const elFormePosX = rangePosX;
    const elFormePosY = rangePosY;

    ajouterPlante(elNomCommun, elNomLatin, elCouleurBg, elImage, elAnimationActif, elAnimationNom, elAnimationProfondeur, elFormesActif, elFormeType, elFormeProfondeur, elFormeEtendue, elFormeHauteur, elFormeLargeur, elFormeCouleur, elFormePosX, elFormePosY);
  }

  const GestionApercu = gestionApercu[etatApercu];

  function handleGestionApercu(presenceNomCommun) {
    setNomCommun(presenceNomCommun);
    if (presenceNomCommun === "vide") {
      if (etatApercu === "introAjouter" || etatApercu === "montage") {
        setEtatApercu("mediatheque");
        props.history.push(props.history.location.pathname + "/mediatheque");
      }
      else if (etatApercu === "mediatheque") {
        setEtatApercu("introAjouter");
        props.history.goBack();
      }
    }
    else {
      if (etatApercu === "introAjouter" || etatApercu === "montage") {
        setEtatApercu("mediatheque");
        props.history.push(props.history.location.pathname + "/mediatheque");
      }
      else if (etatApercu === "mediatheque") {
        setEtatApercu("montage");
        props.history.goBack();
      }
    }
    
  }

  function handleNomCommun(nouveauNomCommun) { 
    setNomCommun(nouveauNomCommun);
  }

  function handleNomLatin(nouveauNomLatin) { 
    setNomLatin(nouveauNomLatin);
  } 

  function handleUrlImage(nouveauUrl) { 
    setImage(baseUrl + nouveauUrl + ".png");
  } 

  function handleCouleurBg(nouvelleCouleur) {
    setCouleurBg(nouvelleCouleur);
  };
  
  function handleTypeVisuel (typeVisuel) {
    if (typeVisuel === "animation") {
      setFormesActif(false);
      setAnimationActif(true);
    }
    else if (typeVisuel === "formes") {
      setFormesActif(true);
      setAnimationActif(false);
    }
    setTypeVisuel(typeVisuel);
  };

  function handleTypeForme(nouvelleForme) {
    setTypeForme(nouvelleForme);
  };

  function handleCouleurForme(nouvelleCouleurForme) {
    setCouleurForme(nouvelleCouleurForme);
  };

  function handleEtendue(nouvelleEtendue) {
    setEtendue(nouvelleEtendue);
  };

  function handleProfondeurForme(nouvelleProfondeur) {
    const zindex = parseInt(nouvelleProfondeur);
    setProfondeurForme(zindex);
  };

  function handleRangeLargeur(nouvelleLargeur) {
    setRangeLargeur(nouvelleLargeur);
  };

  function handleRangeHauteur(nouvelleHauteur) {
    setRangeHauteur(nouvelleHauteur);
  };

  function handleRangePosX(nouvellePosX) {
    setRangePosX(nouvellePosX);
  };

  function handleRangePosY(nouvellePosY) {
    setRangePosY(nouvellePosY);
  };

  function handleChoixAnimation(nouveauChoix) {
    setChoixAnimation(nouveauChoix);
  }

  function handleProfondeurAnimation(nouvelleProfondeur) {
    const zindex = parseInt(nouvelleProfondeur);
    setProfondeurAnimation(zindex);
  };

  function handleEtatMontage(etat) {
    props.etatMontage(etat)
  }

  return (
    <GestionApercu
      section="ajouter"
      gestionApercu={handleGestionApercu}
      etatMontage={handleEtatMontage}

      gestionNomCommun={handleNomCommun}
      gestionNomLatin={handleNomLatin}
      gestionUrlImage={handleUrlImage}
      gestionCouleurBg={handleCouleurBg}

      idPerso={idPlante}
      titre={nomCommun}
      nomLatin={nomLatin}
      image={image}
      couleurBg={couleurBg}
      typeVisuel={typeVisuel}

      gestionTypeVisuel={handleTypeVisuel}
      gestionNomAnimation={handleChoixAnimation}
      gestionProfondeurAnimation={handleProfondeurAnimation}

      animationActive={typeVisuel === "animation" ? true : false}
      nomAnimation={choixAnimation}
      profondeurAnimation={profondeurAnimation}

      gestionTypeForme={handleTypeForme}
      gestionFormeEtendue={handleEtendue}
      gestionCouleurForme={handleCouleurForme}
      gestionProfondeurForme={handleProfondeurForme}
      gestionLargeurForme={handleRangeLargeur}
      gestionHauteurForme={handleRangeHauteur}
      gestionPosXForme={handleRangePosX}
      gestionPosYForme={handleRangePosY}

      formeActive={typeVisuel === "formes" ? true : false}
      typeForme={typeForme}
      formeEtendue={etendue}
      couleurForme={couleurForme}
      profondeurForme={profondeurForme}
      largeurForme={rangeLargeur}
      hauteurForme={rangeHauteur}
      posXForme={rangePosX}
      posYForme={rangePosY} 
      
      ajouterMontage={handleAjouterMontage} />
  );
}

export default AjouterPlante;