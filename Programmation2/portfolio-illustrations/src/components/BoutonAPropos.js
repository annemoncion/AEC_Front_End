import React from "react";
import { Link } from "react-router-dom";

const BoutonAPropos = (props) => {
  return (
    <> 
      <Link to="/a-propos" aria-label="À propos" className={"btn btn-primary btnAPropos btnMobile droite " + (props.etatMontage === "mobileCacher" ? "actif" : "cacher")}>
        <span className="interrogation">?</span>
      </Link>
    </>
  );
}

export default BoutonAPropos;