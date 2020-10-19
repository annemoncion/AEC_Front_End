import React, {useState, useEffect} from 'react';
import Plante from './Plante';
import BoutonAjouterPlante from './BoutonAjouterPlante';
import Masonry from 'react-masonry-component';
import {API} from '../constantes.js';

function ManagePlantes(props) {
  const [data, setData] = useState([]);
  const [test, setTest] = useState(0);
  const [loading, setLoading] = useState(true);
  let initial = 0;

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

  function handleLayoutComplete() {
    initial = initial + 1;
    console.log('initial = ' + initial);
    if (initial === 5) { // Masonry seems to enter the function at least 6 times... should be fixed.
      setTimeout(function(){ setLoading(false) }, 1000);
    }
  }

  return (

    <>
    <div className={'loading ' + (loading ? '' : 'hidden')}>
      <p>Mise en place du montage ...</p>
    </div>
    <Masonry
      className={'grillePlantes ' + (loading ? 'hidden' : '')} // default ''
      elementType={'div'} // default 'div'
      options={{ "itemSelector": ".itemGrille", "columnWidth": ".itemGrille", "percentPosition": true }} // default {}
      disableImagesLoaded={false} // default false
      updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
      onLayoutComplete={() => handleLayoutComplete()}
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
    </>

  );
}

export default ManagePlantes;
