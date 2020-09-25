import React from "react";
import { Link } from "react-router-dom";

const BoutonAjouterPlante = (/*props ici s'il y a lieu*/) => {
  return (
    <div className={"itemGrille btnAjout"}>
      <div className={"insideItem"}>
        <h2>Ajouter un montage</h2>
        <Link to="/ajouter-montage"></Link>
      </div>
    </div>
      
  );
}

export default BoutonAjouterPlante;