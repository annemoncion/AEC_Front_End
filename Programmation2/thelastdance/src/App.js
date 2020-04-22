import React from 'react';
import logoNetflix from './img/logo-netflix.jpg';
import photoMichael from './img/michael-jordan.jpg';
import photoSteve from './img/steve-kerr.jpg';
import photoBill from './img/bill-wennington.jpg';
import photoScottie from './img/scottie-pippen.png';
import photoDennis from './img/dennis-rodman.jpg';
import './App.css';

function App() {
  let nbAleatoire = Math.floor(Math.random() * 5);

  const joueurs = ['Steve Keer', 'Michael Jordan', 'Bill Wennington', 'Scottie Pippen', 'Dennis Rodman'];
  const photosJoueurs = [photoSteve, photoMichael, photoBill, photoScottie, photoDennis];

  let photoActive = photosJoueurs[nbAleatoire];
  let nomJoueurAffiche = joueurs[nbAleatoire];

  function changerJoueur() {
    let liste = document.getElementById("listeACacher");
    liste.style["display"] = "none";
    
    let nbAleatoire = Math.floor(Math.random() * 5);
    let imgJoueur = document.getElementById("imgJoueur");
    let nomJoueur = document.getElementById("nomJoueur");

    imgJoueur.setAttribute("src", photosJoueurs[nbAleatoire]);
    nomJoueur.innerHTML = joueurs[nbAleatoire];
  }

  const listeJoueurs = joueurs.map((element,i) => <li key={'element' + i}>{element}</li>);

  const listeConditionnelle = (
    <ul>
      {nbAleatoire !== 0 && <li>{joueurs[0]}</li>}
      {nbAleatoire !== 1 && <li>{joueurs[1]}</li>}
      {nbAleatoire !== 2 && <li>{joueurs[2]}</li>}
      {nbAleatoire !== 3 && <li>{joueurs[3]}</li>}
      {nbAleatoire !== 4 && <li>{joueurs[4]}</li>}
    </ul>
  );

  const texteAfficher = (
    <div className="App">
      <h1>The last dance</h1>
      <p>Une production de</p>
      <img  className="logo" 
            src={logoNetflix}
            alt="logo netflix"
      />
      <p>Mettant en vedette</p>
      <h2 id="nomJoueur">{nomJoueurAffiche}</h2>
      <img
        id = "imgJoueur"
        className = "imgJoueur"
        src={photoActive}
      />
      <p>Les 5 participants affichés avec la méthode map()</p>
      <ul>{listeJoueurs}</ul>
      <div id="listeACacher">
      <p>Les 4 participants non-choisis affichés grâce à la condition &&</p>
        {listeConditionnelle}
      </div>
      <button onClick={changerJoueur}>Changer les joueurs</button>
    </div>
  );
  return (
    texteAfficher
  );
}

export default App;
