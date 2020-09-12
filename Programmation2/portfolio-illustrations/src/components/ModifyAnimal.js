import React, {useState, useEffect} from "react";
import { Form, Button,Image,Container,Row,Col } from "react-bootstrap";
import {toast} from "react-toastify";

function ModifyAnimal(props) {

  const [animalID, setAnimalID] = useState(1);
  const [donneesRecues, setDonneesRecues] = useState({name: '', picture:"", habitat : ["",""] });
  const [photo, setPhoto] = useState('');
  const [loading, setLoading] = useState(false);
  
  useEffect(() => { 
    getAnimal();
  }, [loading]);

  async function getAnimal() {
    try { 
      //On sait que location.search retourne ?id=4, on désire garder uniquement le 4 
      setAnimalID(props.location.search.substring(4,props.location.search.length));
      console.log("l'état est: " + animalID);

      const response = await fetch("http://localhost:3001/animals/" + animalID); 
      const reponseDeApi = await response.json(); 
      setDonneesRecues(reponseDeApi);
      setPhoto(donneesRecues.picture);
      setLoading(true);
    
      if (!response.ok) { 
          throw Error(response.statusText); 
      }
    } 
    catch (error) { 
      console.log(error); 
    } 
  }

  async function editAnimal(nom,photo,habitat1,habitat2) {  
    try{  
      const response = await fetch('http://localhost:3001/animals/'+ animalID, {  
        method:'PUT',  
        headers: {'Content-Type': 'application/json' },  
        body:JSON.stringify({id : animalID, 
        name: nom, 
        picture: photo, 
        habitat: [ 
          { 
            name: habitat1 
          }, 
          { 
            name: habitat2 
          }] 
        })  
      });  
     
      if(response.ok){  
        const jsonResponse = await response.json();  
        props.history.push("/"); 
        toast.warn("Modification de l'animal " + nom); 
        return jsonResponse;  
      }  
      throw new Error('Request failed!');  
    }  
     
    catch(error){  
      console.log(error);  
    }  
  }

  async function removeAnimal(nom) {  

    try{  
      const response = await fetch('http://localhost:3001/animals/'+ animalID, {  
        method:'delete',  
      });  
     
      if(response.ok){  
        const jsonResponse = await response.json();  
        console.log("SUPPRESSION!"); 
        props.history.push("/"); 
        toast.error("Supression de l'animal " + nom); 
        return jsonResponse;  
      }  
      throw new Error('Request failed!');  
    }  
     
    catch(error){  
      console.log(error);  
    }  
     
  }

  function handleEdit(event) {
    event.preventDefault();
    
    const nom = document.getElementById('nomAnimal').value;
    const photo = document.getElementById('photoAnimal').value;
    const habitat1 = document.getElementById('habitat1').value;
    const habitat2 = document.getElementById('habitat2').value;

    editAnimal(nom,photo,habitat1,habitat2);
  }

  function handleSuppression(event) {
    event.preventDefault();

    const nom = document.getElementById('nomAnimal').value;

    removeAnimal(nom);
  }

  function handlePhoto(event) {
    const photos = document.getElementById('photoAnimal').value;
    setPhoto(photos);
  }

  return (
    <>
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Group controlId="nomAnimal">
              <Form.Label>Nom de l'animal</Form.Label>
              <Form.Control type="text" defaultValue={donneesRecues.name} />
            </Form.Group>
            <Form.Group controlId="photoAnimal">
              <Form.Label>URL d'une photo de l'animal</Form.Label>
              <Form.Control type="text" defaultValue={donneesRecues.picture} onBlur={handlePhoto}/>
            </Form.Group>
            {photo !== "" && <Image src={donneesRecues.picture} rounded width="125"/>}
            <Form.Group controlId="habitat1">
              <Form.Label>Nom de l'habitat principal</Form.Label>
              <Form.Control type="text" defaultValue={donneesRecues.habitat[0].name} />
            </Form.Group>
            <Form.Group controlId="habitat2">
              <Form.Label>Nom de l'habitat secondaire</Form.Label>
              <Form.Control type="text" defaultValue={donneesRecues.habitat[1].name} />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleEdit}>
                Enregistrer
            </Button>

            <Button variant="danger" type="submit" onClick={handleSuppression}>
                Supprimer
            </Button>
          </Form>  
        </Col>    
      </Row>
    </Container>
    </>
  );
}

export default ModifyAnimal;