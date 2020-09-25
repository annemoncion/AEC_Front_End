import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import anime from 'animejs/lib/anime.es.js';
import styled from 'styled-components';
import {ReactComponent as TrianglesEnFile} from '../animation/triangles-en-file.svg';
import Eventail from '../animation/eventail.js';
import Hypnose from '../animation/hypnose.js';
import {ReactComponent as Vide} from '../animation/vide.svg';

const StyledRectangle = styled.div`
  width: ${props => props.largeur + "px"};
  height: ${props => props.hauteur + "px"};
  background-color: ${props => props.couleur};
  z-index: ${props => props.profondeur};
  top: ${props => props.posY + "%"};
  left: ${props => props.posX + "%"};
`
const StyledTriangle = styled.div`
  border-top-width: 0;
  border-right-width: ${props => props.largeur/2 + "px"};
  border-bottom-width: ${props => props.hauteur + "px"};
  border-left-width: ${props => props.largeur/2 + "px"};
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: ${props => props.couleur};
  border-left-color: transparent;
  z-index: ${props => props.profondeur};
  top: ${props => props.posY + "%"};
  left: ${props => props.posX + "%"};
`
const StyledCercle = styled.div`
  width: ${props => props.diametre + "px"};
  height: ${props => props.diametre + "px"};
  background-color: ${props => props.couleur};
  z-index: ${props => props.profondeur};
  top: ${props => props.posY + "%"};
  left: ${props => props.posX + "%"};
`
function Plante(props) {

  useEffect(() => {
    var rotationPremierEl = -105;
    var counter = 0;
    anime({
      targets: '.file',
      translateY: -125.7,
      duration: 4000,
      loop: true,
      easing: 'linear'
    });

    anime({
      targets: '.contenantRectangles .rectangle',
      rotate: {
        value: function(el, i) {
          var saut = 20;
          if (i%saut === 0) { // Reset rotation à chaque 20 éléments
            rotationPremierEl = -105;
          }
          rotationPremierEl = rotationPremierEl + 10;
          return rotationPremierEl + "deg";
        }
      },
      height: {
        value: function(el, i) {
          var saut = 20;
          if (i%saut === 0) { // Reset hauteur à chaque 20 éléments
            counter = 0;
          }
          
          var increase = Math.PI / saut; // répartir la hauteur selon le nombre de 
          var y = (Math.sin(counter) * 130) + 100; // max range aléatoire
          //var z = (Math.sin(counter) * 130) + 70; // min range aléatoire

          /*function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
          }*/

          //var nbAleatoire = getRandomArbitrary(z, y);

          counter += increase;

          return y;
        }
      },
      easing: 'easeInOutCubic',
      duration: 8000,
      delay: 3000,
      direction: 'alternate',
      loop: true
    });
  
    // Create a timeline with default parameters
    var tl = anime.timeline({
      easing: 'easeInOutCubic',
      loop: true,
      duration: 1000,
    });
  
    // Add children
    tl
    .add({
      targets: '.contenantHypnose .triangle1',
      borderWidth: ['0 10px 20px 10px', '0 200px 400px 200px'], // from to
      opacity: 0,
    })
    .add({
      targets: '.contenantHypnose .triangle2',
      borderWidth: ['0 10px 20px 10px', '0 100px 200px 100px'], // from to
      opacity: 0,
    });
  }, [props.nomAnimation, props.image]);

  const nomAnimation = {
    trianglesEnFile: TrianglesEnFile,
    eventail: Eventail,
    hypnose: Hypnose,
    vide: Vide
  };

  const AnimationSpecifique = nomAnimation[props.nomAnimation];

  function forme (actif, type) {
    if (actif) {
      if (type === "rectangle") {
        return (
          <StyledRectangle
          className={"forme " + type}
          largeur={props.largeurForme}
          hauteur={props.hauteurForme}
          couleur={props.couleurForme}
          profondeur={props.profondeurForme}
          posX={props.posXForme}
          posY={props.posYForme}
          />
        )
      }
      else if (type === "triangle") {
        return (
          <StyledTriangle
          className={"forme " + type}
          largeur={props.largeurForme}
          hauteur={props.hauteurForme}
          couleur={props.couleurForme}
          profondeur={props.profondeurForme}
          posX={props.posXForme}
          posY={props.posYForme}
          />
        )
      }
      else if (type === "cercle") {
        return (
          <StyledCercle
          className={"forme " + type}
          diametre={props.largeurForme}
          couleur={props.couleurForme}
          profondeur={props.profondeurForme}
          posX={props.posXForme}
          posY={props.posYForme}
          />
        )
      }
    }
  };

  function nettoyerURL(str) {
    return str
      .toLowerCase()
      .replace(/[àáâãäå]/g,"a")
      .replace(/[èéêë]/g,"e")
      .replace(/[îï]/g,"i")
      .replace(/[ô]/g,"o")
      .replace(/[ûù]/g,"u")
      .replace(/ /g, "-");
  }

  function handleSurvolerLienVoir (e) {
    var element = e.target.parentElement.parentElement;
    element.classList.add("etatHover");
  }

  function handleQuitterLienVoir (e) {
    var element = e.target.parentElement.parentElement;
    element.classList.remove("etatHover");
  }

  return ( 
    <>
    <div className={"itemGrille " + props.couleurBg  + " " + ((props.formeEtendue === "true" && !props.animationActive ? "depasseCadre" : "restreintCadre"))}>
      <div className={"insideItem"}>
        <img src={props.image} alt={props.titre} />
        <Link className="lienVoir" to={"illustration/" + nettoyerURL(props.titre) + "?id=" + props.idPerso} onMouseEnter={handleSurvolerLienVoir} onMouseLeave={handleQuitterLienVoir} />
        <AnimationSpecifique visible={props.animationActive ? "true" : "false"} profondeur={props.profondeurAnimation === 1 ? "dessous" : "dessus"} className={"animation " + (props.animationActive ? "actif" : "cacher") + " " + (props.profondeurAnimation === 1 ? "dessous" : "dessus")}/>
        {forme(props.formeActive, props.typeForme, props.profondeurForme)}
      </div>
      <h3 className="titre">{props.titre}</h3>
    </div>
    </>
  ); 
}

export default Plante;