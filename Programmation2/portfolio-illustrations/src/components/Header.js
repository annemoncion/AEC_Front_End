import React from "react";
import logo from "../img/logo_annemoncion_illustration.svg";

export class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <header className="header">
            <img src={logo} alt="Logo Anne Moncion Illustration" />
        </header>
    );
  }
}