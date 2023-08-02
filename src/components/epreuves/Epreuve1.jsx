import React, { useState } from 'react';
import Question from '../Question';

const Epreuve1 = ({ onAnswer }) => {
    const questions = [
        {
          text: 'Quelle est la balise HTML utilisée pour créer un lien hypertexte?',
          options: ['<link>', '<a>', '<href>', '<url>'],
          correctOption: '<a>',
        },
        {
          text: 'Quelle est la propriété CSS utilisée pour définir la couleur du texte?',
          options: ['text-color', 'color', 'font-color', 'text-style'],
          correctOption: 'color',
        },
        {
          text: 'Quelle balise HTML est utilisée pour créer une liste non ordonnée?',
          options: ['<ol>', '<li>', '<ul>', '<dl>'],
          correctOption: '<ul>',
        },
        {
          text: 'Quelle est la propriété CSS utilisée pour ajouter une ombre autour d\'un élément?',
          options: ['box-shadow', 'shadow', 'element-shadow', 'shadow-box'],
          correctOption: 'box-shadow',
        },
        {
          text: 'Quelle balise HTML est utilisée pour insérer une image?',
          options: ['<image>', '<img>', '<picture>', '<src>'],
          correctOption: '<img>',
        },
        {
          text: 'Quelle est la propriété CSS utilisée pour centrer un élément horizontalement?',
          options: ['margin', 'center', 'horizontal-align', 'text-align'],
          correctOption: 'text-align',
        },
        {
          text: 'Quelle balise HTML est utilisée pour créer un titre de niveau le plus élevé?',
          options: ['<h1>', '<heading>', '<head>', '<title>'],
          correctOption: '<h1>',
        },
        {
          text: 'Quelle est la propriété CSS utilisée pour rendre le texte en italique?',
          options: ['font-style', 'italic', 'text-style', 'italicize'],
          correctOption: 'font-style',
        },
        {
          text: 'Quelle balise HTML est utilisée pour créer un paragraphe?',
          options: ['<p>', '<para>', '<paragraph>', '<text>'],
          correctOption: '<p>',
        },
        {
          text: 'Quelle est la propriété CSS utilisée pour ajuster l\'espacement entre les lignes de texte?',
          options: ['line-spacing', 'text-spacing', 'line-height', 'spacing'],
          correctOption: 'line-height',
        },
      ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswer = (selectedOption) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.correctOption;
    onAnswer(isCorrect);

    // Passer à la question suivante
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <h3>{currentQuestion.text}</h3>
      <Question
        question={currentQuestion}
        options={currentQuestion.options}
        onAnswer={handleAnswer}
      />
    </div>
  );
};

export default Epreuve1;
