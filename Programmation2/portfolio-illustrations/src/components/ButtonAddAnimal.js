import React from "react";
import { Link } from "react-router-dom";

const ButtonAddAnimal = (/*props ici s'il y a lieu*/) => {
  return (
    <> 
      <Link to="/ajouterAnimal" className="btn btn-primary mt-5">
        Ajouter un animal
      </Link>
    </>
  );
}

export default ButtonAddAnimal;