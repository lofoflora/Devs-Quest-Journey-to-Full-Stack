import React, { useState } from 'react';
import EpreuveCard from './EpreuveCard';

// Importez ici vos données JSON pour chaque épreuve
import epreuve1Data from './epreuves/Epreuve1.json';
import epreuve2Data from './epreuves/Epreuve2.json';
import epreuve3Data from './epreuves/Epreuve3.json';
import epreuve4Data from './epreuves/Epreuve4.json';
import epreuve5Data from './epreuves/Epreuve5.json';
import epreuve6Data from './epreuves/EpreuveFinal.json';

// Ajoutez ici les autres épreuves...

const EpreuveContainer = () => {
  const [currentEpreuveIndex, setCurrentEpreuveIndex] = useState(0);
  const epreuvesData = [epreuve1Data, epreuve2Data, epreuve3Data,epreuve4Data,epreuve5Data,epreuve6Data]; // Ajoutez ici les autres épreuves...

  const handleEpreuveFinish = () => {
    // Passer à l'épreuve suivante
    if (currentEpreuveIndex + 1 < epreuvesData.length) {
      setCurrentEpreuveIndex(currentEpreuveIndex + 1);
    } else {
      // Si c'était la dernière épreuve, afficher un message de fin ou rediriger l'utilisateur vers une autre page
      alert('Toutes les épreuves sont terminées !');
    }
  };

  return (
    <div>
      {epreuvesData.map((epreuve, index) => (
        <div key={index} style={{ display: index === currentEpreuveIndex ? 'block' : 'none' }}>
          <EpreuveCard epreuve={epreuve} onEpreuveFinish={handleEpreuveFinish} />
        </div>
      ))}
    </div>
  );
};

export default EpreuveContainer;
