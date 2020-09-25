import React from "react";  
 
export class Video extends React.Component { 

    render() { 

        return ( 
            <div className="contenant-iframe">
                <iframe title="video-baie" width="1120" height="630" src="https://www.youtube.com/embed/Teh9erZTRvc?start=14" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div> 

        ); 
    }
}