import React, {useState} from 'react';
import Accueil from './Accueil'; 
import EditerPlante from './EditerPlante';
import AjouterPlante from './AjouterPlante';
import APropos from './APropos';
import {Header} from './Header';
import Footer from './Footer';
import ButtonHomepage from './ButtonHomepage';
import BoutonAPropos from './BoutonAPropos';
import PageNotFound from './PageNotFound';
import {Route, Switch, Redirect} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import {API} from '../constantes.js';
import '../css/main-style.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const[etatMontage, setEtatMontage] = useState("mobileCacher");

  let location = useLocation();

  
  
  // Fonction pour populer crudcrud

  // createPlantes();

  /*async function createPlantes() {  
    try{  
      const response = await fetch(API, {  
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'POST', 
        body:JSON.stringify({
          nomCommun:"Bleuetier",
          nomLatin:"Vaccinium angustifolium",
          couleurBg:"blanc",
          image : "https://annemoncion.com/img/illustrations/plantes/fond-transparent/bleuetier.png",
          animation:{
            actif:true,
            nom:"eventail",
            profondeur:1
          },
          formes:{
            actif:false,
            type:"triangle",
            profondeur:1,
            etendue:false,
            hauteur:300,
            largeur:300,
            couleur:"#000",
            posY:50,
            posX:50
          }
        })
      });  
     
      if(response.ok){  
        //const jsonResponse = await response.json();  
        console.log("Ajout plante bd ok"); 
        return response;  
      }  
      throw new Error('Request failed!');  
    }  
     
    catch(error){  
      console.log(error);  
    }  
  }*/

  function handleEtatMontage(etat) {
    setEtatMontage(etat)
  }

  return (
    <> 
      <ToastContainer autoClose={3000} hideProgressBar />
      {(location.pathname.indexOf("mediatheque") <= -1)  && <Header etatMontage={etatMontage}/> }
      {(location.pathname !== "/") && (location.pathname.indexOf("mediatheque") <= -1) && <ButtonHomepage etatMontage={etatMontage}/> }
      {(location.pathname !== "/a-propos") && (location.pathname.indexOf("mediatheque") <= -1) && <BoutonAPropos etatMontage={etatMontage}/> }
      <Switch>
        <Route path="/" exact component={Accueil} />
        <Route path="/a-propos" component={APropos} /> 
        <Route 
          path="/illustration/:id"
          render={(props) => (
            <EditerPlante {...props} etatMontage={handleEtatMontage} />
          )} />
        <Route 
          path="/ajouter-montage"
          render={(props) => (
            <AjouterPlante {...props} etatMontage={handleEtatMontage} />
          )} />
        <Redirect from="/ajouter" to="ajouter-montage" />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </> 
  );
}

export default App;
