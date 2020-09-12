import React, {useState} from "react";
import { Form, Button,Image,Container,Row,Col } from "react-bootstrap";
import {toast} from "react-toastify";

function FormAddAnimal(props) {
  const [photo, setPhoto] = useState('');

  async function addAnimal(nom,photo,habitat1, habitat2) { 
    try{ 
      const newID = await getID();
      const response = await fetch('http://localhost:3001/animals/', { 
        method:'POST', 
        headers: {'Content-Type': 'application/json'  }, 
        body:JSON.stringify({id : newID,
          name: nom,
          picture: photo,
          habitat: [
            {
              name: habitat1
            },
            {
              name: habitat2
            }
          ]
        }) 
      }); 
      if(response.ok){ 
        const jsonResponse = await response.json(); 
        props.history.push("/"); //Revenir à l'accueil
        toast.success("Ajout de l'animal " + nom);

        return jsonResponse; 
      } 
      throw new Error('Request failed!'); 
  } 
   catch(error){ 
      console.log(error); 
   } 
}
  //Retourne le prochain ID pour savoir où ajouter
  async function getID() {
    try {
      let nextID = 0 
      const response = await fetch("http://localhost:3001/animals");
      const reponseDeApi = await response.json();
      for (let i=0;i<reponseDeApi.length;i++){
        if(reponseDeApi[i].id > nextID){
            nextID = reponseDeApi[i].id;
        }
      }   
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return nextID+1;
    } catch (error) {
      console.log(error);
    }
  }

  function handleAdd(event){
    event.preventDefault();
    
    const nom = document.getElementById('nomAnimal').value;
    const photo = document.getElementById('photoAnimal').value;
    const habitat1 = document.getElementById('habitat1').value;
    const habitat2 = document.getElementById('habitat2').value;

    addAnimal(nom,photo,habitat1,habitat2);
  }

  function handlePhoto(event){
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
                <Form.Control type="text" placeholder="Entrer le nom de l'animal" />
              </Form.Group>
              <Form.Group controlId="photoAnimal">
                <Form.Label>URL d'une photo de l'animal</Form.Label>
                <Form.Control type="text" placeholder="Entrer une URL valide" onBlur={handlePhoto}/>
              </Form.Group>
              {photo !== "" && <Image src={photo} rounded width="125"/>}
              <Form.Group controlId="habitat1">
                <Form.Label>Nom de l'habitat principal</Form.Label>
                <Form.Control type="text" placeholder="Entrer le nom de l'habitat principal" />
              </Form.Group>
              <Form.Group controlId="habitat2">
                <Form.Label>Nom de l'habitat secondaire</Form.Label>
                <Form.Control type="text" placeholder="Entrer le nom de l'habitat secondaire" />
              </Form.Group>

            <Button variant="primary" type="submit" onClick={handleAdd}>
                Enregistrer
            </Button>
            </Form>  
            </Col>    
          </Row>
        </Container>
      </>
    );
}

export default FormAddAnimal;