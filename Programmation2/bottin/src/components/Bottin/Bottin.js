import React from 'react';
import Row from 'react-bootstrap/Row';
import {Client} from '../Client/Client';
import {Recherche} from '../Recherche/Recherche';
import {AjoutClient} from '../AjoutClient/AjoutClient';

let tabClients = [
    {
        src: require("../../img/clients/andy.jpg"),
        nom: "Andy Bernard",
        profession: "Chanteur",
        courriel: "andy.bernard@gmail.com",
        codeRegional: "514",
        telephone: "344-2342",
        adresse: "4353 DesPins"
    },
    {
        src: require("../../img/clients/angelina.jpg"),
        nom: "Angela",
        profession: "Chasseuse de chats",
        courriel: "angelina@gmail.com",
        codeRegional: "514",
        telephone: "344-2342",
        adresse: "4353 DeLaRue"
    },
    {
        src: require("../../img/clients/creed.jpg"),
        nom: "Creed",
        profession: "Un peu de tout",
        courriel: "creed@gmail.com",
        codeRegional: "514",
        telephone: "344-2342",
        adresse: "www.creedthoughts.com"
    },
    {
        src: require("../../img/clients/dwight.jpg"),
        nom: "Dwight Shrute",
        profession: "Prof de karaté",
        courriel: "dwight@gmail.com",
        codeRegional: "514",
        telephone: "344-2342",
        adresse: "4353 DuMousqueton"
    },
    {
        src: require("../../img/clients/jim.jpg"),
        nom: "Jim",
        profession: "Entrepreneur",
        courriel: "jim@gmail.com",
        codeRegional: "514",
        telephone: "344-2342",
        adresse: "4353 DesPins"
    },
    {
        src: require("../../img/clients/kelly.jpg"),
        nom: "Kelly Clark",
        profession: "Potineuse",
        courriel: "kelly.clark@gmail.com",
        codeRegional: "514",
        telephone: "344-2342",
        adresse: "4353 DesPins"
    },
    {
        src: require("../../img/clients/kevin.jpg"),
        nom: "Kevin",
        profession: "Batteur",
        courriel: "kevin@gmail.com",
        codeRegional: "514",
        telephone: "344-2342",
        adresse: "4353 DesPins"
    },
    {
        src: require("../../img/clients/meredith.jpg"),
        nom: "Meredith",
        profession: "Nudiste",
        courriel: "meredith@gmail.com",
        codeRegional: "514",
        telephone: "344-2342",
        adresse: "4353 DesPins"
    },
    {
        src: require("../../img/clients/michael.jpg"),
        nom: "Michael Scott",
        profession: "Patron à l'office",
        courriel: "michael.scott@gmail.com",
        codeRegional: "514",
        telephone: "344-2342",
        adresse: "4353 DesPins"
    },
    {
        src: require("../../img/clients/oscar.jpg"),
        nom: "Oscar",
        profession: "Comptable",
        courriel: "oscar@gmail.com",
        telephone: "514-344-2342",
        adresse: "4353 DesPins"
    },
    {
        src: require("../../img/clients/pam.jpg"),
        nom: "Pam Beasley",
        profession: "Designer",
        courriel: "pam.besley@gmail.com",
        codeRegional: "514",
        telephone: "344-2342",
        adresse: "4353 DesPins"
    },
    {
        src: require("../../img/clients/toby.jpg"),
        nom: "Toby",
        profession: "Ressources humaines",
        courriel: "toby@gmail.com",
        codeRegional: "514",
        telephone: "344-2342",
        adresse: "4353 DesPins"
    },
]

export class Bottin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {filtre:'', ajoutClient:false};
    
        this.transmissionFiltre = this.transmissionFiltre.bind(this);
        this.transmissionInfos = this.transmissionInfos.bind(this);
        this.afficherClients = this.afficherClients.bind(this);
    }
    
    transmissionFiltre(recherche) {
        this.setState({filtre: recherche});
    }

    transmissionInfos(infos) {
        let nouveauClient = {
            src: require("../../img/clients/michael.jpg"),
            nom: infos.nom,
            profession: infos.profession,
            courriel: infos.courriel,
            codeRegional: infos.codeRegional,
            telephone: infos.telephone,
            adresse: infos.adresse
        }

        tabClients.push(nouveauClient);
        this.setState({ajoutClient:true});
        
    }

    afficherClients() {
        let filtre = this.state.filtre.toUpperCase()

        return tabClients.map((element,i) => (
            element.nom.toUpperCase().includes(filtre) &&
            <Client
                key={"client" + i}
                src={element.src}
                nom={element.nom}
                profession={element.profession}
                courriel={element.courriel}
                codeRegional={element.codeRegional}
                telephone={element.telephone}
                adresse={element.adresse}
            />
            )
        )
    }

    render() {
       return (
           <>
            <Recherche filtre={this.transmissionFiltre} />
            <Row>
                   {this.afficherClients()}
            </Row>
            <AjoutClient infosClient={this.transmissionInfos} />
           </>
           
        );
    }
}