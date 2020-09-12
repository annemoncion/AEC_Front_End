import React from 'react';
import Accueil from './Accueil'; 
import ModifyAnimal from './ModifyAnimal';
import AddAnimal from './AddAnimal';
import {Header} from './Header';
import ButtonAddAnimal from './ButtonAddAnimal';
import ButtonHomepage from './ButtonHomepage';
import PageNotFound from './PageNotFound';
import {Route, Switch, useLocation} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import './App.css';
import '../css/main-style.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  let location = useLocation();
  console.log(location.pathname);
  return (
    <> 
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header />
      <Switch>
        <Route path="/" exact component={Accueil} /> 
        <Route path="/ajouterAnimal" component={AddAnimal} />
        <Route path="/plante/:id" component={ModifyAnimal} />  
        <Route component={PageNotFound} />
      </Switch>
      {(location.pathname !== "/ajouterAnimal" && !location.pathname.startsWith("/animal")) && <ButtonAddAnimal/> }
      {(location.pathname !== "/") && <ButtonHomepage/> }
    </> 
  );
}

export default App;
