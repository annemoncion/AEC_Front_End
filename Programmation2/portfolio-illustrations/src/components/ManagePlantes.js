import React, {useState, useEffect} from 'react';
import Plante from './Plante';

function ManagePlantes(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [plantsFetched, setPlantsFetched] = useState(false);

  useEffect(() => { 
    getPlantes();
  }, [loading]);

  async function getPlantes() {  
    try {
      const response = await fetch("http://localhost:3001/plantes");
      const reponseDeApi = await response.json();
      setData(reponseDeApi);
      setLoading(true);
      setPlantsFetched(true);
      if (!response.ok) {
          throw Error(response.statusText);
      }
    }
    catch(error) {
        console.log(error);
    }
  }

  //Charger la librairie mansonry.js quand les plantes ont été chargées.
  useEffect(() => {
      const script = document.createElement('script');
      script.src = "/js/masonry.pkgd.js";
      script.async = true;
      document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, [plantsFetched]);

  return ( 

    <div className="grillePlantes" data-masonry='{ "itemSelector": ".itemGrille", "columnWidth": ".itemGrille", "percentPosition": true }'> 

      {Object.keys(data).map(key => ( 

        <Plante key={key} idPerso={parseInt(key) + 1} image={data[key].image} toutLobjet={data[key]}></Plante>

        ))}

    </div> 

  ); 
}

export default ManagePlantes;