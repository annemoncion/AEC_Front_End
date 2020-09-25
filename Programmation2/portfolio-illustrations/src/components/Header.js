import React from "react";
import logo from "../img/logo_annemoncion_illustration.svg";

export class Header extends React.Component {

  render() {
    return (
        <header className={"header " + (this.props.etatMontage === "mobileCacher" ? "actif" : "cacher")}>
            <img src={logo} alt="Logo Anne Moncion Illustration" />
        </header>
    );
  }
}