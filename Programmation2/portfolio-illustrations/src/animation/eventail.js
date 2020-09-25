import React from "react";
 
function Eventail(props) {

  return ( 
    <>
    <div className={"contenantRectangles animation " + (props.visible === "true" ? "actif" : "cacher") + " " + (props.profondeur === "dessous" ? "dessous" : "dessus")}>
        <div className="rectangle rect1"></div>
        <div className="rectangle rect2"></div>
        <div className="rectangle rect3"></div>
        <div className="rectangle"></div>
        <div className="rectangle"></div>
        <div className="rectangle"></div>
        <div className="rectangle"></div>
        <div className="rectangle"></div>
        <div className="rectangle"></div>
        <div className="rectangle"></div>
        <div className="rectangle rect1"></div>
        <div className="rectangle rect2"></div>
        <div className="rectangle rect3"></div>
        <div className="rectangle"></div>
        <div className="rectangle"></div>
        <div className="rectangle"></div>
        <div className="rectangle"></div>
        <div className="rectangle"></div>
        <div className="rectangle"></div>
        <div className="rectangle"></div>
    </div>

    </>
  ); 
}

export default Eventail;