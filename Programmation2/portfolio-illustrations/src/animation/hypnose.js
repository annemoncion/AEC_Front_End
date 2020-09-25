import React from "react";
 
function Hypnose(props) {

  return ( 
    <>
    <div className={"contenantHypnose animation " + (props.visible === "true" ? "actif" : "cacher") + " " + (props.profondeur === "dessous" ? "dessous" : "dessus")}>
        <div className="triangle triangle1"></div>
        <div className="triangle triangle2"></div>
        <div className="triangle triangle3"></div>
    </div>

    </>
  ); 
}

export default Hypnose;