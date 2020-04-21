import React from 'react'; 
import ReactDOM from 'react-dom'; 
import './index.css';
import photo from './corbeau-profil.jpg';

const imgStyle = {
  maxWidth: 300 + 'px',
  display: 'block'
};

const presentation = (
  <div id="presentation">
    <h1 className="rouge">Anne Moncion</h1>
    <p>Ceci est un excellent paragraphe pour me présenter ! Que dire, que dire, je manque d'inspiration ce soir.</p>
    <a
      href="https://github.com/annemoncion/AEC_Front_End"
      target="_blank"
    >
      Jetez plutôt un coup d'oeil à mon GitHub!
    </a>
    <img 
      src={photo}
      style={imgStyle}
    />
    <h3>D'autres passions en vrac</h3>
    <ul>
      <li>Le swing</li>
      <li>La couture</li>
      <li>La randonnée</li>
    </ul>
  </div> 
);
 

ReactDOM.render( 

presentation,
  
document.getElementById('root')  

);
