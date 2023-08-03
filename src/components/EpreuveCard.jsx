import React, { useState } from 'react';

const EpreuveCard = ({ epreuve, onEpreuveFinish }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleFinishClick = async () => {
    // Vérifier si une option est sélectionnée
    if (selectedOption === '') {
      alert('Veuillez sélectionner une réponse.');
      return;
    }

    // Envoyer la réponse sélectionnée au backend pour vérification (voir routes/answers.routes.js)
    try {
      const response = await fetch('/api/answers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          questionId: epreuve.questions[currentQuestionIndex].id,
          selectedOption,
        }),
      });
      const data = await response.json();
      setIsCorrect(data.isCorrect);
    } catch (error) {
      console.error(error);
      alert('Une erreur s\'est produite lors de la vérification de la réponse.');
    }

    setShowResult(true);
  };

  const handleNextQuestionClick = () => {
    // Passer à la question suivante
    if (currentQuestionIndex + 1 < epreuve.questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption('');
      setShowResult(false);
      setIsCorrect(false);
    } else {
      // Si c'était la dernière question, appeler la fonction de fin de l'épreuve
      onEpreuveFinish();
    }
  };

  return (
    <div>
      <h3>{epreuve.epreuve}</h3>
      <p>{epreuve.summary}</p>
      {showResult ? (
        <div>
          <h4>Résultat de la question {currentQuestionIndex + 1}</h4>
          <p>{epreuve.questions[currentQuestionIndex].text}</p>
          <p>Votre réponse : {selectedOption}</p>
          <p>{isCorrect ? 'Bonne réponse !' : 'Mauvaise réponse !'}</p>
          <button onClick={handleNextQuestionClick}>Question suivante</button>
        </div>
      ) : (
        <div>
          <h4>Question {currentQuestionIndex + 1}</h4>
          <p>{epreuve.questions[currentQuestionIndex].text}</p>
          {epreuve.questions[currentQuestionIndex].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              disabled={selectedOption !== ''}
            >
              {option}
            </button>
          ))}
          <button onClick={handleFinishClick} disabled={selectedOption === ''}>
            Valider la réponse
          </button>
        </div>
      )}
    </div>
  );
};

export default EpreuveCard;
