import React from "react";
import { Link } from "react-router-dom";
import iconeFleche from "../img/icone-retour.svg";

const ButtonHomepage = (props) => {
  return (
    <> 
      <Link to="/" className={"btn btn-primary btnRetour btnMobile gauche " + (props.etatMontage === "mobileCacher" ? "actif" : "cacher")}>
        <img src={iconeFleche} alt="retour" /><span className="desktop">Retour au portfolio</span>
      </Link>
    </>
  );
}

export default ButtonHomepage;