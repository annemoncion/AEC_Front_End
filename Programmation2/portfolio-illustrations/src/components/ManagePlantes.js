import React, {useState, useEffect} from 'react';
import Plante from './Plante';
import BoutonAjouterPlante from './BoutonAjouterPlante';
import Masonry from 'react-masonry-component';
import {API} from '../constantes.js';

function ManagePlantes(props) {
  const [data, setData] = useState([]);
  const [test, setTest] = useState(0);

  useEffect(() => { 
    getPlantes();
  }, [test]);
  
  const getPlantes = async () => {  
      try {
        const response = await fetch(API);
        const reponseDeApi = await response.json();
        setData(reponseDeApi);
        setTest(1);
        if (!response.ok) {
            throw Error(response.statusText);
        }
      }
      catch(error) {
          console.log(error);
      }
  }

  return ( 

    <Masonry
      className={'grillePlantes'} // default ''
      elementType={'div'} // default 'div'
      options={{ "itemSelector": ".itemGrille", "columnWidth": ".itemGrille", "percentPosition": true }} // default {}
      disableImagesLoaded={false} // default false
      updateOnEachImageLoad={true} // default false and works only if disableImagesLoaded is false
      >
      {Object.keys(data).map(key => ( 

        

        <Plante 
          key={key} 
          idPerso={data[key]._id}
          image={data[key].image}
          couleurBg={data[key].couleurBg} 
          toutLobjet={data[key]}
          titre={data[key].nomCommun}
          animationActive={data[key].animation.actif}
          nomAnimation={data[key].animation.nom}
          profondeurAnimation={data[key].animation.profondeur}
          formeEtendue={data[key].formes.etendue}
          formeActive={data[key].formes.actif}
          typeForme={data[key].formes.type}
          couleurForme={data[key].formes.couleur}
          profondeurForme={data[key].formes.profondeur}
          largeurForme={data[key].formes.largeur}
          hauteurForme={data[key].formes.hauteur}
          posXForme={data[key].formes.posX}
          posYForme={data[key].formes.posY}
          />

      ))}
        <BoutonAjouterPlante/>
    </Masonry>

  ); 
}

export default ManagePlantes;