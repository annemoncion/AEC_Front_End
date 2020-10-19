import React, {useState, useEffect} from "react";
import Montage from "./Montage.js";
import Mediatheque from "./Mediatheque.js";
import {API} from "../constantes.js";
import {toast} from "react-toastify";

const baseUrl = "https://annemoncion.com/img/illustrations/plantes/fond-transparent/";

const gestionApercu = {
  mediatheque: Mediatheque,
  montage: Montage
};

function EditerPlante(props) {

  const [donneesRecues, setDonneesRecues] = useState({nomCommun: '', nomLatin: '', couleurBg: '', image: '', animation: { actif:false, nom:'vide', profondeur:1}, formes: { actif:false, type:'', profondeur:1, etendue:false, hauteur:0, largeur:0, couleur:'', posY:0, posX:0 }});
  const [etatApercu, setEtatApercu] = useState("montage");
  const [planteID] = useState(props.location.search.substring(4,props.location.search.length));
  const [image, setImage] = useState("");
  const [nomCommun, setNomCommun] = useState("");
  const [nomLatin, setNomLatin] = useState("");
  const [couleurBg, setCouleurBg] = useState("blanc");
  const [typeVisuel, setTypeVisuel] = useState("formes");
  const [formesActif, setFormesActif] = useState(false);
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
  
  useEffect(() => { 
    getPlanteInfos();

    async function getPlanteInfos() {
      try {
        const response = await fetch(API + planteID); 
        const reponseDeApi = await response.json(); 
        setDonneesRecues(reponseDeApi);
        setNomCommun(donneesRecues.nomCommun);
        setNomLatin(donneesRecues.nomLatin);
        setImage(donneesRecues.image);
        setCouleurBg(donneesRecues.couleurBg);
        setAnimationActif(donneesRecues.animation.actif);
        setFormesActif(donneesRecues.formes.actif);
        setChoixAnimation(donneesRecues.animation.nom);
        setProfondeurAnimation(donneesRecues.animation.profondeur);
        setTypeForme(donneesRecues.formes.type);
        setCouleurForme(donneesRecues.formes.couleur);
        setEtendue(donneesRecues.formes.etendue);
        setProfondeurForme(donneesRecues.formes.profondeur);
        setRangeLargeur(donneesRecues.formes.largeur);
        setRangeHauteur(donneesRecues.formes.hauteur);
        setRangePosX(donneesRecues.formes.posX);
        setRangePosY(donneesRecues.formes.posY);
        if (donneesRecues.animation.actif) {
          setTypeVisuel("animation");
        }
        else {
          setTypeVisuel("formes");
        }
  
        if (!response.ok) { 
            throw Error(response.statusText); 
        }
      } 
      catch (error) { 
        console.log(error); 
      } 
    }

  }, [planteID, donneesRecues.nomCommun, donneesRecues.nomLatin, donneesRecues.image, donneesRecues.couleurBg, donneesRecues.animation.actif, donneesRecues.formes.actif, donneesRecues.animation.profondeur, donneesRecues.animation.nom, donneesRecues.formes.type, donneesRecues.formes.couleur, donneesRecues.formes.etendue, donneesRecues.formes.profondeur, donneesRecues.formes.largeur, donneesRecues.formes.hauteur, donneesRecues.formes.posX, donneesRecues.formes.posY]);


  async function editerPlante(elNomCommun, elNomLatin, elCouleurBg, elImage, elAnimationActif, elAnimationNom, elAnimationProfondeur, elFormesActif, elFormeType, elFormeProfondeur, elFormeEtendue, elFormeHauteur, elFormeLargeur, elFormeCouleur, elFormePosX, elFormePosY) {  
    try{  
      const response = await fetch(API + planteID, {  
        method:'PUT',  
        headers: {'Content-Type': 'application/json' },  
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
        props.history.push("/"); 
        toast.warn("Modification du montage de " + elNomCommun, {
          autoClose: false
        });
        return response;
      }

      throw new Error('Request failed!');  
    }  
     
    catch(error){  
      console.log(error);  
    }  
  }

  async function removePlante(nom) {
    try{  
      const response = await fetch(API + planteID, {  
        method:'delete',  
      });  
     
      if(response.ok){   
        console.log("SUPPRESSION!"); 
        props.history.push("/"); 
        toast.error("Supression du montage " + nom); 
        return response;  
      }  
      throw new Error('Request failed!');  
    }  
     
    catch(error){  
      console.log(error);  
    }  
  }

  function handleEditerMontage(event) {
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

    editerPlante(elNomCommun, elNomLatin, elCouleurBg, elImage, elAnimationActif, elAnimationNom, elAnimationProfondeur, elFormesActif, elFormeType, elFormeProfondeur, elFormeEtendue, elFormeHauteur, elFormeLargeur, elFormeCouleur, elFormePosX, elFormePosY);
  }

  function handleSupprimerMontage(event) {
    event.preventDefault();
    const nom = nomCommun;
    removePlante(nom);
  }

  const GestionApercu = gestionApercu[etatApercu];

  function handleGestionApercu() {
    if (etatApercu === "montage") {
      setEtatApercu("mediatheque");
      props.history.push(props.history.location.pathname + "/mediatheque");
    }
    else if (etatApercu === "mediatheque") {
      setEtatApercu("montage");
      props.history.goBack();
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
    props.etatMontage(etat);
  }

  return (
    <>
    <GestionApercu
      section="editer"
      gestionApercu={handleGestionApercu}
      etatMontage={handleEtatMontage}

      gestionNomCommun={handleNomCommun}
      gestionNomLatin={handleNomLatin}
      gestionUrlImage={handleUrlImage}
      gestionCouleurBg={handleCouleurBg}

      idPerso={planteID}
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
      
      editerMontage={handleEditerMontage}
      supprimerMontage={handleSupprimerMontage} />
    </>
  );
}

export default EditerPlante;