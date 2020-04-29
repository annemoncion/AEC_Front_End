import React from 'react';
import {Categorie} from '../Categorie/Categorie';

export class Catalogue extends React.Component {
    render() {
        return (
            <div className="Catalogue">
                <Categorie></Categorie>
                <Categorie></Categorie>
                <Categorie></Categorie>
                <Categorie></Categorie>
                <Categorie></Categorie>
                <Categorie></Categorie>
            </div>
        );
    }
}