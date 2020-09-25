import React from "react"; 
import {Nav,Navbar} from "react-bootstrap" 
import {NavLink} from 'react-router-dom' 
 
export class MenuSansPostBack extends React.Component { 

    render() { 
        const activeStyle = { 
            color : "royalblue", 
            fontWeight: "bold" 
        }; 
        return ( 
            <> 
            <Navbar bg="light" variant="light"> 
                <Navbar.Brand href="/">La Baie géorgienne</Navbar.Brand> 
                <Nav className="mr-auto"> 
                    <NavLink exact to="/" activeStyle={activeStyle}>Accueil</NavLink>
                    <NavLink to="/photos" activeStyle={activeStyle}>Photos</NavLink>
                    <NavLink to="/video" activeStyle={activeStyle}>Vidéo</NavLink>
                    <NavLink to="/carte" activeStyle={activeStyle}>Carte</NavLink>
                </Nav> 
            </Navbar> 
            </> 

        ); 
    }
}