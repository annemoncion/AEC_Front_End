import React from 'react';
import {Accueil} from './Accueil'; 
import {Photos} from './Photos'; 
import {Carte} from './Carte'; 
import {Video} from './Video';
import {MenuSansPostBack} from './MenuSansPostBack.js';
import {Footer} from './Footer.js';
import {Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <> 
      <MenuSansPostBack /> 
      <Route path="/" exact component={Accueil} /> 
      <Route path="/photos" component={Photos} /> 
      <Route path="/video" component={Video} /> 
      <Route path="/carte" component={Carte} />
      <Footer />
    </> 
  );
}

export default App;
