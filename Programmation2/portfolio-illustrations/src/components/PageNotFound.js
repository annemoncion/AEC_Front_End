import React from "react";
import imgIntrouvable from "../img/404.jpg";
 
const PageNotFound = () => { 

    return ( 
        <div className="pageNotFound">
            <img src={imgIntrouvable} alt="404 - Page non trouvée" />
        </div> 
    ); 
}

export default PageNotFound;