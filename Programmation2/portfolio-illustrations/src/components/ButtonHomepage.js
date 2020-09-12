import React from "react";
import { Link } from "react-router-dom";

const ButtonHomepage = () => {
  return (
    <> 
      <Link to="/" className="btn btn-primary mt-5">
        Retour à la liste des animaux
      </Link>
    </>
  );
}

export default ButtonHomepage;