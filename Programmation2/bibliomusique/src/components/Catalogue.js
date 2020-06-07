import React from 'react';
import {AlbumMini} from './AlbumMini';
import {Album} from './Album';
import {Chanson} from './Chanson';
import {Deconnexion} from './Deconnexion';
import {Recherche} from './Recherche';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const tabAlbums = [
    {
        album: 'Les ombres longues',
        artiste: 'Antoine Corriveau',
        cover: require("../img/les-ombres-longues.jpg"),
        alt: 'Les ombres longues',
        annee: 2014,
        nbChansons: 10,
        duree: 46,
        chansons: [
            {   
                numero: 1,
                titre: 'Un par un',
                dureeChanson: '07:08',
                paroles: [
                    {paragraphe: [
                            {ligne: 'Je dessine des ombres longues'},
                            {ligne: 'Des lumières de fin d’été'},
                            {ligne: 'Et ton ombre qui s’allonge'},
                            {ligne: 'Comme une rivière sur le plancher'},
                        ]
                    },
                    {paragraphe: [
                            {ligne: 'Un courant froid que j’ai laissé'},
                            {ligne: 'Doucement t’emporter'},
                            {ligne: 'Comme l’heure en trop qui disparaissait'},
                            {ligne: 'Quand celle d’hiver revenait'},
                        ]
                    },
                    {paragraphe: [
                            {ligne: 'Et l’ombre qui remontera flottera à la surface'},
                            {ligne: 'Elle ira rejoindre tous les autres morceaux de glace'},
                            {ligne: 'Là où l’eau devient de la mort tellement il fait cassant'},
                            {ligne: 'Et tellement la mort fera partie du plan'},
                        ]
                    },
                    {paragraphe: [
                            {ligne: 'J’ai emballé dans la toile'},
                            {ligne: 'Un des mille corps à larguer'},
                            {ligne: 'L’ai trainé sous les étoiles'},
                            {ligne: 'Comme un boulet sur le plancher'},
                        ]
                    },
                    {paragraphe: [
                            {ligne: 'Un courant froid que tu as laissé'},
                            {ligne: 'Doucement m’emporter'},
                            {ligne: 'Comme l’heure en trop qui disparaissait'},
                            {ligne: 'Quand celle d’hiver revenait'},
                        ]
                    },
                    {paragraphe: [
                            {ligne: 'Et l’ombre qui remontera flottera à la surface'},
                            {ligne: 'Elle ira rejoindre tous les autres morceaux de glace'},
                            {ligne: 'Là où l’eau devient de la mort tellement il fait cassant'},
                            {ligne: 'Et tellement la mort fera partie du plan'},
                            {ligne: 'Oui, tellement la mort fera partie du plan'},
                        ]
                    },
                ]
            },
            {
                numero: 2,
                titre: 'Le temps des coupes à blanc',
                dureeChanson: '03:47',
                paroles: [
                    {paragraphe: [
                            {ligne: 'Je suis une montagne érodée'},
                            {ligne: 'Embrassée par la mer'},
                            {ligne: 'Sur chacun de mes flancs'},
                            {ligne: 'Je disparais tranquillement'},
                        ]
                    },
                    {paragraphe: [
                            {ligne: 'J’ai vu des montagnes pleurer'},
                            {ligne: 'Pour faire monter la mer'},
                            {ligne: 'Plus rapidement'},
                            {ligne: 'Et se laisser noyer'},
                        ]
                    },
                    {paragraphe: [
                            {ligne: 'Même les deux arbres'},
                            {ligne: 'Qui avaient poussé côte à côte'},
                            {ligne: 'Se sont perdus quand est venu'},
                            {ligne: 'Le temps des coupes à blanc (han han, han han, han han)'},
                        ]
                    },
                    {paragraphe: [
                            {ligne: 'Quel est ce vent'},
                            {ligne: 'Qui est passé si rapidement?'},
                            {ligne: 'Saccager le versant connu'},
                            {ligne: 'De l’île que je suis devenu'},
                        ]
                    },
                    {paragraphe: [
                            {ligne: 'Et si j’ai laissé bâtir'},
                            {ligne: 'Quelque chose de temporaire'},
                            {ligne: 'C’est que c’est là où je sais'},
                            {ligne: 'Je serai rongé par la mer'},
                        ]
                    },
                    {paragraphe: [
                            {ligne: 'Même les deux arbres'},
                            {ligne: 'Qui avaient poussé côte à côte'},
                            {ligne: 'Se sont perdus quand est venu'},
                            {ligne: 'Le temps des coupes à blanc (han han, han han, han han, han han, han han, han han)'},
                        ]
                    },
                    {paragraphe: [
                            {ligne: 'J’ai attendu et attendu'},
                            {ligne: 'Qu’on ne me reconnaisse plus'},
                            {ligne: 'Une fois rendu, une fois rendu'},
                            {ligne: 'J’ai regardé mourir la vue'},
                            {ligne: 'La la la la la, la la la la la'},
                            {ligne: 'La la la la la la la la la'},
                            {ligne: 'La la la la la, la la la la la'},
                            {ligne: 'La la la la la la la la la'},
                        ]
                    },
                    {paragraphe: [
                            {ligne: 'Même les deux arbres'},
                            {ligne: 'Qui avaient poussé côte à côte'},
                            {ligne: 'Se sont perdus quand est venu'},
                            {ligne: 'Le temps des coupes à blanc  (han han, han han, han han)'},
                        ]
                    },
                ]
            },
            {
                numero: 3,
                titre: 'Noyer le poisson',
                dureeChanson: '03:26'
            },
            {
                numero: 4,
                titre: 'La ville d\'où on vient',
                dureeChanson: '03:45'
            },
            {
                numero: 5,
                titre: 'Je sors dehors',
                dureeChanson: '06:24'
            },
            {
                numero: 6,
                titre: 'Le nouveau vocabulaire',
                dureeChanson: '03:09'
            },
            {
                numero: 8,
                titre: 'Printemps, printemps',
                dureeChanson: '03:51'
            },
            {
                numero: 9,
                titre: 'La tête en marche',
                dureeChanson: '05:02'
            },
            {
                numero: 10,
                titre: 'Tu es comme la nuit',
                dureeChanson: '04:34'
            },
            {
                numero: 11,
                titre: 'Et tu penses que je veux',
                dureeChanson: '05:19'
            }
        ]
    },
    {
        album: 'L\'étoile thoracique',
        artiste: 'Klo Pelgag',
        cover: require("../img/letoile-thoracique.jpg"),
        alt: 'L\'étoile thoracique',
        annee: 2016,
        nbChansons: 13,
        duree: 54,
        chansons: [
            {
                numero: 1,
                titre: 'Samedi soir à la violence',
                dureeChanson: '04:08',
            },
            {
                numero: 2,
                titre: 'Les ferrofluides-fleurs',
                dureeChanson: '02:44',
            },
            {
                numero: 3,
                titre: 'Le sexe des étoiles',
                dureeChanson: '05:48',
            },
            {
                numero: 4,
                titre: 'Les instants d\'équilibre',
                dureeChanson: '03:10',
            },
            {
                numero: 5,
                titre: 'Au bonheur d\'Édelweiss',
                dureeChanson: '02:59',
            },
            {
                numero: 6,
                titre: 'Incendie',
                dureeChanson: '03:39',
            },
            {
                numero: 7,
                titre: 'Les mains d\'Édelweiss',
                dureeChanson: '03:06',
            },
            {
                numero: 8,
                titre: 'Les animaux',
                dureeChanson: '04:21',
            },
            {
                numero: 9,
                titre: 'Chorégraphie des âmes',
                dureeChanson: '02:48',
            },
            {
                numero: 10,
                titre: 'Au musée Grévin',
                dureeChanson: '02:52',
            },
            {
                numero: 11,
                titre: 'Insomnie',
                dureeChanson: '04:20',
            },
            {
                numero: 12,
                titre: 'J\'arrive en retard',
                dureeChanson: '04:46',
            },
            {
                numero: 13,
                titre: 'Apparition de la Sainte-Éloile thoracique',
                dureeChanson: '10:06',
            }
        ]
    },
    {
        album: 'Premier juin',
        artiste: 'Lydia Képinski',
        cover: require("../img/premier-juin.jpg"),
        alt: 'Premier juin',
        annee: 2018,
        nbChansons: 8,
        duree: 39,
        chansons: [
            {
                numero: 1,
                titre: 'Les routes indolores',
                dureeChanson: '03:57',
            },
            {
                numero: 2,
                titre: 'Premier juin',
                dureeChanson: '04:48',
            },
            {
                numero: 3,
                titre: '360 jours',
                dureeChanson: '04:42',
            },
            {
                numero: 4,
                titre: 'Maïa',
                dureeChanson: '04:28',
            },
            {
                numero: 5,
                titre: 'Belmont',
                dureeChanson: '05:52',
            },
            {
                numero: 6,
                titre: 'Les balançoires',
                dureeChanson: '06:06',
            },
            {
                numero: 7,
                titre: 'Sur la mélamine',
                dureeChanson: '03:30',
            },
            {
                numero: 8,
                titre: 'Pie-IX',
                dureeChanson: '05:47',
            }
        ]
    },
    {
        album: 'Rencontrer Looloo',
        artiste: 'Chocolat',
        cover: require("../img/rencontrer-looloo.jpg"),
        alt: 'Rencontrer Looloo',
        annee: 2016,
        nbChansons: 11,
        duree: 33,
        chansons: [
            {
                numero: 1,
                titre: 'On est meilleurs qu\'R.E.M.',
                dureeChanson: '02:47',
            },
            {
                numero: 2,
                titre: 'Ah ouin',
                dureeChanson: '02:30',
            },
            {
                numero: 3,
                titre: 'Golden Age',
                dureeChanson: '02:40',
            },
            {
                numero: 4,
                titre: 'Les pyramides',
                dureeChanson: '02:59',
            },
            {
                numero: 5,
                titre: 'Retrouver Looloo',
                dureeChanson: '02:35',
            },
            {
                numero: 6,
                titre: 'Koyaanisqatsi - Apparition',
                dureeChanson: '03:50',
            },
            {
                numero: 7,
                titre: 'Looloo',
                dureeChanson: '03:48',
            },
            {
                numero: 8,
                titre: 'Mars',
                dureeChanson: '02:09',
            },
            {
                numero: 9,
                titre: 'Les géants',
                dureeChanson: '02:38',
            },
            {
                numero: 10,
                titre: 'Le faucon, le chacal et le vaisseau spatial',
                dureeChanson: '04:07',
            },
            {
                numero: 11,
                titre: 'Les mésanges',
                dureeChanson: '02:58',
            }
        ]
    },
    {
        album: 'Tu ne mourras pas',
        artiste: 'Maude Audet',
        cover: require("../img/tu-ne-mourras-pas.jpg"),
        alt: 'Tu ne mourras pas',
        annee: 2020,
        nbChansons: 11,
        duree: 33,
        chansons: [
            {
                numero: 1,
                titre: 'Tu trembleras encore',
                dureeChanson: '03:22',
            },
            {
                numero: 2,
                titre: 'Demande-moi',
                dureeChanson: '03:21',
            },
            {
                numero: 3,
                titre: 'Laura',
                dureeChanson: '02:35',
            },
            {
                numero: 4,
                titre: 'Nos bras lâches',
                dureeChanson: '04:10',
            },
            {
                numero: 5,
                titre: 'Tu ne mourras pas',
                dureeChanson: '03:20',
            },
            {
                numero: 6,
                titre: 'Couteau de poche',
                dureeChanson: '03:00',
            },
            {
                numero: 7,
                titre: 'Fille canon',
                dureeChanson: '02:39',
            },
            {
                numero: 8,
                titre: 'Femme flamme',
                dureeChanson: '03:25',
            },
            {
                numero: 9,
                titre: 'Juste un peu de temps',
                dureeChanson: '03:56',
            },
            {
                numero: 10,
                titre: 'Les gelées de novembre',
                dureeChanson: '02:56',
            },
            {
                numero: 11,
                titre: 'Tant de ciels',
                dureeChanson: '00:39',
            }
        ]
    },
    {
        album: 'Ultramarr',
        artiste: 'Fred Fortin',
        cover: require("../img/ultramarr.jpg"),
        alt: 'Ultramarr',
        annee: 2015,
        nbChansons: 11,
        duree: 36,
        chansons: [
            {
                numero: 1,
                titre: 'Oiseau',
                dureeChanson: '04:38',
            },
            {
                numero: 2,
                titre: 'Douille',
                dureeChanson: '03:27',
            },
            {
                numero: 3,
                titre: '10$',
                dureeChanson: '03:47',
            },
            {
                numero: 4,
                titre: 'Gratte',
                dureeChanson: '05:00',
            },
            {
                numero: 5,
                titre: 'Tapis noir',
                dureeChanson: '02:24',
            },
            {
                numero: 6,
                titre: 'Tête perdue',
                dureeChanson: '03:30',
            },
            {
                numero: 7,
                titre: 'Grippe',
                dureeChanson: '03:08',
            },
            {
                numero: 8,
                titre: 'L\'amour ô Canada',
                dureeChanson: '02:18',
            },
            {
                numero: 9,
                titre: 'Molly',
                dureeChanson: '04:15',
            },
            {
                numero: 10,
                titre: 'Ultramarr',
                dureeChanson: '02:26',
            },
            {
                numero: 11,
                titre: 'Tite dernière',
                dureeChanson: '01:22',
            }
        ]
    }
]

export class Catalogue extends React.Component {

    constructor(props) {
        super(props);
        this.state = {filtre:'', albumSeul: false, albumId: 0, chansonSeule: false, chansonId: 0, titreSection:'Albums'};

        this.transmettreFiltre = this.transmettreFiltre.bind(this);
        this.transmettreEtatAlbum = this.transmettreEtatAlbum.bind(this);
        this.transmettreAlbumId = this.transmettreAlbumId.bind(this);
        this.transmettreEtatChanson = this.transmettreEtatChanson.bind(this);
        this.transmettreChansonId = this.transmettreChansonId.bind(this);
        this.afficherAlbums = this.afficherAlbums.bind(this);
        this.afficherRecherche = this.afficherRecherche.bind(this);
        this.seDeconnecter = this.seDeconnecter.bind(this);
    }

    transmettreFiltre(recherche) {
        this.setState({filtre:recherche});
    }

    transmettreEtatAlbum(etat) {
        this.setState({albumSeul: etat});
        if (etat) {
            this.setState({titreSection:'Parcourez l\'album'});
        }
        else {
            this.setState({titreSection:'Albums'});
        }
        
    }

    transmettreAlbumId(choixAlbum) {
        this.setState({albumId: choixAlbum});
    }

    transmettreEtatChanson(etat) {
        this.setState({chansonSeule: etat});
        if (etat) {
            this.setState({titreSection:'Chansons'});
        }
        else {
            this.setState({titreSection:'Parcourez l\'album'});
        }
    }

    transmettreChansonId(choixChanson) {
        this.setState({chansonId: choixChanson});
    }

    seDeconnecter(connecter) {
        this.props.connexion(connecter);
    } 

    afficherAlbums() {
        let filtre = this.state.filtre.toUpperCase()
        let albumChoisi = tabAlbums[this.state.albumId];
        let chansonChoisie = tabAlbums[this.state.albumId].chansons[this.state.chansonId]

        if (this.state.chansonSeule) {
            return (
                <Chanson 
                    chansonId={this.state.chansonId}
                    id={"chanson" + this.state.chansonId}
                    cover={albumChoisi.cover}
                    alt={albumChoisi.alt}
                    album={albumChoisi.album}
                    artiste={albumChoisi.artiste}
                    titre={chansonChoisie.titre}
                    dureeChanson={chansonChoisie.dureeChanson}
                    numero={chansonChoisie.numero}
                    paroles={(chansonChoisie.paroles) ? chansonChoisie.paroles : 'sansParoles'} 
                    chansonSeule={this.transmettreEtatChanson}/>
            )
        }
        else if (this.state.albumSeul) {
            return (
                <Album 
                    albumId={this.state.albumId}
                    id={"album" + this.state.albumId}
                    cover={albumChoisi.cover}
                    alt={albumChoisi.alt}
                    album={albumChoisi.album}
                    artiste={albumChoisi.artiste}
                    annee={albumChoisi.annee}
                    nbChansons={albumChoisi.nbChansons}
                    duree={albumChoisi.duree}
                    chansons={albumChoisi.chansons}
                    chansonId={this.transmettreChansonId}
                    chansonSeule={this.transmettreEtatChanson}
                    albumSeul={this.transmettreEtatAlbum} />
            )
        }
        else {
            return tabAlbums.map((element,i) => (
                (element.album.toUpperCase().includes(filtre) || element.artiste.toUpperCase().includes(filtre)) &&
                <AlbumMini
                    key={"album" + i}
                    id={"album" + i}
                    cover={element.cover}
                    alt={element.alt}
                    album={element.album}
                    artiste={element.artiste}
                    albumId={this.transmettreAlbumId}
                    albumSeul={this.transmettreEtatAlbum}
                />
                )
            )
        }  
    }

    afficherRecherche() {
        if (!(this.state.albumSeul)) {
            return (
                <Recherche filtre={this.transmettreFiltre}/>
            )
        }
    }

    render() {
        return (
            <>
            <Row className="nav">
                <Col sm="8" md="6" lg="4" className="contenantRecherche">
                    {this.afficherRecherche()}
                </Col>
                <Col sm="4" md="6" lg="8" className="contenantDeconnexion">
                    <Deconnexion onClick={this.seDeconnecter} />
                </Col>
            </Row>
            <Row>
                <Col className="contenantTitre">
                    <h1>{this.state.titreSection}</h1>
                </Col>
            </Row>
            <Row className='catalogue'>
                {this.afficherAlbums()}
            </Row>
            </>
        );
    }
}