import React, { useState } from 'react';
import Epreuve1 from '../epreuves/Epreuve1';
import Epreuve2 from '../epreuves/Epreuve2';
// Importez les autres épreuves ici

const Quest = () => {
  const [currentEpreuveIndex, setCurrentEpreuveIndex] = useState(0);
  const [level, setLevel] = useState(1);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      // Augmenter le niveau du joueur s'il répond correctement
      setLevel((prev) => prev + 1);
      setCorrectAnswers((prev) => prev + 1);
    }

    // Vérifier si toutes les épreuves ont été terminées
    if (currentEpreuveIndex === epreuves.length - 1 && isCorrect) {
      // Si toutes les épreuves sont correctes, augmenter le niveau du joueur
      setLevel((prev) => prev + 1);
    }

    // Passer à l'épreuve suivante
    setCurrentEpreuveIndex((prev) => prev + 1);
  };

  const resetQuest = () => {
    // Réinitialiser l'épreuve pour recommencer
    setCurrentEpreuveIndex(0);
    setLevel(1);
    setCorrectAnswers(0);
  };

  // Liste des épreuves disponibles
  const epreuves = [Epreuve1, Epreuve2]; // Ajoutez les autres épreuves ici

  // Sélectionner l'épreuve actuelle en fonction de l'index
  const CurrentEpreuve = epreuves[currentEpreuveIndex];

  return (
    <div>
      {currentEpreuveIndex < epreuves.length ? (
        <div>
          <h2>Épreuve {currentEpreuveIndex + 1} : "HTML vs. CSS : Le Duel des Balises Ensorcelées"</h2>
          <CurrentEpreuve onAnswer={handleAnswer} />
        </div>
      ) : (
        <div>
          <h2>Épreuve terminée !</h2>
          <p>Nombre de bonnes réponses : {correctAnswers} / {questions.length}</p>
          <p>Niveau actuel : {level}</p>
          <button onClick={resetQuest}>Recommencer l'épreuve</button>
        </div>
      )}
    </div>
  );
};

export default Quest;
