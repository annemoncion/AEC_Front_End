import React from "react";
 
export class Carte extends React.Component { 
    
    render() { 

        return ( 
            <div className="contenant-iframe">
                <iframe title="carte-trajet" src="https://www.google.com/maps/embed?pb=!1m76!1m12!1m3!1d1715363.465586628!2d-78.32344000427409!3d45.08028801049379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m61!3e0!4m5!1s0x4cc9194261fee195%3A0x14d9020d0da4ad16!2s6537%20Chambord%20Street%2C%20Montr%C3%A9al%2C%20QC!3m2!1d45.540541999999995!2d-73.600276!4m5!1s0x4d282d68161ae3df%3A0x9b512c77a6fd1149!2sParc%20provincial%20Samuel%20de%20Champlain!3m2!1d46.2839009!2d-78.8544047!4m5!1s0x4d2eafb7bb07dca5%3A0x56fd5cb71b8ead37!2sParc%20provincial%20Lac%20Grundy!3m2!1d45.9397965!2d-80.574764!4m5!1s0x4d2bbd619d3e2477%3A0x4b05eea1796c8494!2sParc%20provincial%20Killbear!3m2!1d45.3586283!2d-80.2133284!4m5!1s0x4d2b2006d722ed89%3A0xccb06d79d33b0c98!2sparc%20provincial%20Awenda!3m2!1d44.843539199999995!2d-80.0059635!4m5!1s0x4d2b1d81f0f59219%3A0x975630a380a9a46d!2sParc%20national%20des%20%C3%8Eles-de-la-Baie-Georgienne!3m2!1d44.8743165!2d-79.8699554!4m5!1s0x89d66cf51ed9bb93%3A0xcf3e8489b9507ec3!2sPresqu&#39;ile%20Point%2C%20ON!3m2!1d43.997703!2d-77.678144!4m5!1s0x89d6419d88348b9b%3A0x12ea5cd0d83d0f6b!2sNorth%20Beach%20Provincial%20Park%20Enterance!3m2!1d43.9534933!2d-77.5220977!4m5!1s0x89d64c19059f9749%3A0x9cb7321f8eb286a8!2sSand%20Banks%2C%20ON!3m2!1d43.897751!2d-77.27839999999999!4m5!1s0x4cc9194269c2b7f5%3A0x22e01637ff11576f!2sMontr%C3%A9al%2C%20QC%20H2G%203C1!3m2!1d45.540754799999995!2d-73.6007607!5e0!3m2!1sfr!2sca!4v1593563182814!5m2!1sfr!2sca" width="1200" height="800" frameBorder="0" aria-hidden="false" tabIndex="0"></iframe>
            </div> 

        ); 
    }
}