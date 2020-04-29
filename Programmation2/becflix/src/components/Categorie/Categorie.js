import React from 'react';
import Row from 'react-bootstrap/Row';
import {TvShow} from '../TvShow/TvShow';

export class Categorie extends React.Component {
    render() {
        let nomCategorie = "Suspense";
        return (
            <div className="Categorie">
                <Row>
                   <h1>{nomCategorie}</h1> 
                </Row>
               <Row> 
                    <TvShow></TvShow>
                    <TvShow></TvShow>
                    <TvShow></TvShow>
                    <TvShow></TvShow>
                    <TvShow></TvShow>
                    <TvShow></TvShow>
                </Row> 
            </div>
            
        );
    }
}