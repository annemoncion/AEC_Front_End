import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export class Chanson extends React.Component {

    constructor(props) {
        super(props);

        this.afficherParoles = this.afficherParoles.bind(this);
        this.revenirAlbum = this.revenirAlbum.bind(this);
    }

    revenirAlbum() {
        this.props.chansonSeule(false);
    }

    afficherParoles() {
        if (this.props.paroles === 'sansParoles') {
            return (
                <div className='paragrapheParoles'>
                    <p>Les paroles ne sont pas disponibles pour le moment.</p>
                </div>
            )
        }
        else {
            return this.props.paroles.map((element,i) => (
                <div 
                    className='paragrapheParoles'
                    key={"paragrapheParoles" + i}
                    id={"paragrapheParole" + i}>
                    <p>{element.paragraphe.map((ligne,j)=> (
                        <span key={"ligne" + j}>
                            {ligne.ligne}
                        </span>
                        )
                    )}
                    </p>
                </div>
                )
            ) 
        }
        
    }

    render() {
        return (
            <>
            <Col md="12" lg={{ span: 10, offset: 2 }}>
                <div className="boutonRetour">
                    <Button onClick={this.revenirAlbum}>{"< Retour à l'album"}</Button>
                </div>
            </Col>
            <Col md="3" lg={{ span: 3, offset: 2 }}>
                <img className="coverAlbum img-fluid" src={this.props.cover} alt={this.props.alt} title={this.props.alt} />
                <div className="rappelInfos">
                    <h2>{this.props.album}</h2> 
                    <h3>{this.props.artiste}</h3>
                </div>
            </Col>
            <Col md="9" lg="5">   
                <div className="chanson">
                    <h2>{this.props.titre}</h2>
                    {this.afficherParoles()}
                </div>
            </Col>
            </>
        );
    }

}