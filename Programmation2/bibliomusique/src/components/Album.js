import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export class Album extends React.Component {

    constructor(props) {
        super(props);

        this.handleChanson = this.handleChanson.bind(this);
        this.revenirAlbums = this.revenirAlbums.bind(this);
    }

    handleChanson(i) {
        let chansonId = i;
        this.props.chansonSeule(true);
        this.props.chansonId(chansonId);
    }

    revenirAlbums() {
        this.props.albumSeul(false);
    }


    render() {
        return (
            <>
            <Col md="12" lg={{ span: 10, offset: 2 }}>
                <div className="boutonRetour">
                    <Button onClick={this.revenirAlbums}>{"< Retour au catalogue"}</Button>
                </div>
            </Col>
            <Col md="3" lg={{ span: 3, offset: 2 }}>
                <img className="img-fluid coverAlbum" src={this.props.cover} alt={this.props.alt} title={this.props.alt} />
            </Col>
            <Col md="9" lg="5">
                <div className="infosAlbum">
                    <h3>{this.props.artiste}</h3>
                    <h2>{this.props.album}</h2>
                    <p>{this.props.annee}<span className="separateur"></span>{this.props.nbChansons + " chansons"}<span className="separateur"></span>{this.props.duree + " min"}</p>  
                </div>
                <div className="listeChansons">
                    <ul>
                        {this.props.chansons.map((element,i) => (
                            <li key={"chanson" + i} id={"chanson" + i} onClick={() => this.handleChanson(i)}>
                                <span className="numeroChanson">{element.numero + "."}</span>
                                <span>{element.titre}</span>
                                <span>{element.dureeChanson}</span>
                                {console.log(element.numero)}
                            </li>
                        ))}
                    </ul>
                </div>
            </Col>
            </>
            
        );
    }

}