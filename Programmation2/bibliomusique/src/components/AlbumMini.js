import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

export class AlbumMini extends React.Component {

    constructor(props) {
        super(props);
        this.state = {hovered: false};

        this.handleAlbum = this.handleAlbum.bind(this);
    }

    handleAlbum() {
        let albumId = this.props.id;
        let substrId = albumId.substr(5,1);

        this.props.albumId(substrId);
        this.props.albumSeul(true);
    }

    render() {
        return (
            <Col sm='6' md='3' lg='2'>
                <Card 
                    id={this.props.id} 
                    style={{maxWidth: '18rem'}}
                    onClick={this.handleAlbum}
                    onMouseOver={() => this.setState({ hovered: true})}
                    onMouseOut={() => this.setState({ hovered: false})}
                    className={this.state.hovered ? 'hovered' : ''}
                >
                    <Card.Img variant="top" className="img-fluid" src={this.props.cover} alt={this.props.alt} title={this.props.alt} />
                    <Card.Body>
                        <Card.Title>{this.props.album}</Card.Title>
                        <Card.Subtitle>{this.props.artiste}</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Col>
            
        );
    }
}