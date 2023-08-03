import React, { useState } from 'react';
import Question from '../Question';

const Epreuve1 = ({ onAnswer }) => {
  const tasks = [
    {
      title: "Tâche 1 : Trouver la Potion de Balises Perdues",
      summary: "Explorer un mystérieux labyrinthe rempli de balises HTML égarées. Résoudre des énigmes pour retrouver la potion magique qui restaure l'ordre dans les balises."
    },
    {
      title: "Tâche 2 : Créer un Sortilège de Mise en Page Fantastique",
      summary: "Utiliser les pouvoirs de CSS pour créer une mise en page magnifique et envoûtante. Expérimenter avec les propriétés CSS pour donner vie au design."
    },
    {
      title: "Tâche 3 : Dompter les Divs Indomptables",
      summary: "Affronter les divs rebelles qui refusent de se plier aux règles CSS. Trouver des solutions pour rendre les divs dociles et obéissants."
    },
    {
      title: "Tâche 4 : Le Labyrinthe des Balises Égarées",
      summary: "Naviguer à travers un labyrinthe de balises HTML malicieusement mélangées. Rétablir l'ordre en plaçant chaque balise à sa place correcte."
    },
    {
      title: "Tâche 5 : La Confrontation avec le Dragon de CSS",
      summary: "Affronter un dragon géant créé entièrement en CSS. Utiliser les compétences en CSS pour vaincre le dragon et sauver le royaume du chaos."
    },
    {
      title: "Tâche 6 : Le Combat des Balises Interdites",
      summary: "S'engager dans un duel de balises interdites en HTML. Utiliser des balises alternatives pour éviter les erreurs et les pénalités."
    },
    {
      title: "Tâche 7 : La Danse Envoûtante des Flexbox",
      summary: "Maîtriser la danse envoûtante des Flexbox pour créer des mises en page fluides et flexibles. Réaliser des défis de mise en page pour montrer sa maîtrise des Flexbox."
    },
    {
      title: "Tâche 8 : Le Mystère des Pseudos-Éléments",
      summary: "Découvrir les mystérieux pseudos-éléments en CSS et leurs pouvoirs cachés. Utiliser les pseudos-éléments pour ajouter des effets spéciaux et magiques au design."
    },
    {
      title: "Tâche 9 : La Course des Classes Magiques",
      summary: "Participer à une course de classes magiques en HTML et CSS. Optimiser les classes pour obtenir la meilleure performance et vitesse."
    },
    {
      title: "Tâche 10 : Le Défi des Grilles Magiques",
      summary: "Créer des grilles magiques en CSS pour organiser et disposer les éléments. Résoudre des énigmes de mise en page en utilisant les grilles CSS."
    }
  ];

  const questions = [
    {
      text: 'Question 1 : Quelle balise HTML est utilisée pour créer un paragraphe ?',
      options: [
        'a) &lt;p&gt;',
        'b) &lt;par&gt;',
        'c) &lt;para&gt;',
        'd) &lt;paragraph&gt;'
      ],
      correctOption: 'a) &lt;p&gt;'
    },
    {
      text: 'Question 2 : Quelle est la propriété CSS utilisée pour changer la couleur du texte ?',
      options: [
        'a) text-color',
        'b) color',
        'c) font-color',
        'd) text-style'
      ],
      correctOption: 'b) color'
    },
    {
      text: 'Question 3 : Quelle balise HTML est utilisée pour insérer une image ?',
      options: [
        'a) &lt;image&gt;',
        'b) &lt;img&gt;',
        'c) &lt;picture&gt;',
        'd) &lt;img src=""&gt;'
      ],
      correctOption: 'b) &lt;img&gt;'
    },
    {
      text: 'Question 4 : Quelle est la propriété CSS utilisée pour définir la taille de la police ?',
      options: [
        'a) font-family',
        'b) text-size',
        'c) font-size',
        'd) size'
      ],
      correctOption: 'c) font-size'
    },
    {
      text: 'Question 5 : Quelle balise HTML est utilisée pour créer un lien hypertexte ?',
      options: [
        'a) &lt;link&gt;',
        'b) &lt;a&gt;',
        'c) &lt;href&gt;',
        'd) &lt;url&gt;'
      ],
      correctOption: 'b) &lt;a&gt;'
    },
    {
      text: 'Question 6 : Quelle est la propriété CSS utilisée pour définir la couleur d\'arrière-plan d\'un élément ?',
      options: [
        'a) background-color',
        'b) color',
        'c) bg-color',
        'd) background'
      ],
      correctOption: 'a) background-color'
    },
    {
      text: 'Question 7 : Quelle balise HTML est utilisée pour créer une liste non ordonnée ?',
      options: [
        'a) &lt;list&gt;',
        'b) &lt;ul&gt;',
        'c) &lt;ol&gt;',
        'd) &lt;ul&gt;&lt;/ul&gt;'
      ],
      correctOption: 'b) &lt;ul&gt;'
    },
    {
      text: 'Question 8 : Quelle est la propriété CSS utilisée pour définir la marge extérieure d\'un élément ?',
      options: [
        'a) padding',
        'b) margin',
        'c) outer-margin',
        'd) space'
      ],
      correctOption: 'b) margin'
    },
    {
      text: 'Question 9 : Quelle balise HTML est utilisée pour créer un en-tête de niveau 1 ?',
      options: [
        'a) &lt;header&gt;',
        'b) &lt;h1&gt;',
        'c) &lt;heading&gt;',
        'd) &lt;h&gt;'
      ],
      correctOption: 'b) &lt;h1&gt;'
    },
    {
      text: 'Question 10 : Quelle est la propriété CSS utilisée pour aligner le texte à droite ?',
      options: [
        'a) text-align: center',
        'b) text-align: right',
        'c) text-align: left',
        'd) align: right'
      ],
      correctOption: 'b) text-align: right'
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showSummary, setShowSummary] = useState(true);

  const handleAnswer = (selectedOption) => {
    if (showSummary) {
      setShowSummary(false);
    }

    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.correctOption;
    onAnswer(isCorrect);

    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const currentQuestion = questions[currentQuestionIndex];
  const currentTask = tasks[currentQuestionIndex];

  return (
    <div>
      {showSummary ? (
        <div>
          <h2>{currentTask.title}</h2>
          <p>{currentTask.summary}</p>
          <button onClick={() => setShowSummary(false)}>Commencer l'épreuve</button>
        </div>
      ) : (
        <div>
          <h3>{currentQuestion.text}</h3>
          <Question
            question={currentQuestion}
            options={currentQuestion.options}
            onAnswer={handleAnswer}
          />
        </div>
      )}
    </div>
  );
};

export default Epreuve1;
