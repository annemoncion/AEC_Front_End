import React from "react";
import {Link} from 'react-router-dom';
import anime from 'animejs/lib/anime.es.js';
import {ReactComponent as TrianglesEnFile} from '../animation/triangles-en-file.svg';
import {ReactComponent as Vide} from '../animation/vide.svg';
 
function Plante(props) {
  
  anime({
    targets: 'path',
    translateY: -125,
    duration: 1200,
    loop: true,
    easing: 'linear'
  });

  const nomAnimation = {
    trianglesEnFile: TrianglesEnFile,
    vide: Vide
  };

  const AnimationSpecifique = nomAnimation[props.toutLobjet.animation.nom];

  return ( 
    <>
    <div className={"itemGrille " + props.toutLobjet.couleurBg}>
      <div className="insideItem">
        <img src={props.image} alt={props.toutLobjet.nomCommun} />
        <Link to={"plante/" + props.nom + "?id=" + props.idPerso} />
        <AnimationSpecifique />
      </div>
      <h3 className="titre">{props.toutLobjet.nomCommun}</h3>
    </div>
    </>
  ); 
}

export default Plante;