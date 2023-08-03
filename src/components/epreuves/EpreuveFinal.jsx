import React, { useState } from 'react';
import Question from '../Question';

const EpreuveFinale = ({ onAnswer }) => {
  const tasks = [
    {
      title: "Tâche 1 : L'Entraînement au Maniement de la Fléchette Ensorcelée",
      summary: "Apprendre l'art du lancer de fléchette ensorcelée pour se préparer au duel. S'entraîner à viser avec précision pour toucher le Grand Chef Full Stack."
    },
    {
      title: "Tâche 2 : Le Rituel d'Invocation de l'Étoile de Ninja Magique",
      summary: "Maîtriser le rituel d'invocation pour appeler l'étoile de ninja magique. Apprendre à utiliser l'étoile de ninja avec adresse et rapidité."
    },
    {
      title: "Tâche 3 : Le Défi du Clavier d'Ordinateur Enchanté",
      summary: "Affronter le clavier d'ordinateur enchanté du Grand Chef Full Stack. Résoudre les énigmes et les épreuves lancées par le clavier pour déverrouiller l'accès au duel final."
    },
    {
      title: "Tâche 4 : La Course contre la Montre pour Atteindre le Grand Chef Full Stack",
      summary: "Traverser un labyrinthe ensorcelé pour atteindre la salle du duel. Éviter les pièges et surmonter les obstacles pour arriver à temps."
    },
    {
      title: "Tâche 5 : Le Duel Épique avec le Grand Chef Full Stack",
      summary: "Se confronter au Grand Chef Full Stack dans un duel épique. Utiliser les compétences en développement web pour attaquer et contrer les attaques du Chef."
    },
    {
      title: "Tâche 6 : Le Sortilège de Debuggage pour Neutraliser les Bugs Magiques",
      summary: "Utiliser le sortilège de debuggage pour neutraliser les bugs magiques lancés par le Chef. Assurer que l'application reste stable et fonctionnelle pendant le duel."
    },
    {
      title: "Tâche 7 : La Danse Envoûtante des Frameworks",
      summary: "Maîtriser la danse envoûtante des frameworks pour augmenter la puissance du code. Utiliser les frameworks de développement web pour renforcer les attaques et les défenses."
    },
    {
      title: "Tâche 8 : Le Mystère des Algorithmes Ensorcelés",
      summary: "Découvrir les algorithmes ensorcelés utilisés par le Chef pour défendre son code. Trouver les contre-mesures pour déjouer les tactiques du Chef."
    },
    {
      title: "Tâche 9 : La Course contre la Fatigue pour Rester Concentré",
      summary: "Garder son calme et sa concentration malgré la fatigue du duel. Utiliser la magie de la résilience pour rester fort jusqu'à la fin."
    },
    {
      title: "Tâche 10 : Le Coup Final pour Vaincre le Grand Chef Full Stack",
      summary: "Lancer le coup final avec succès en utilisant la fléchette, l'étoile de ninja et le clavier. Vaincre le Grand Chef Full Stack et devenir le nouveau maître du développement web Full Stack !"
    }
  ];

  const questions = [
    {
      text: 'Question 1 : Quel langage est utilisé pour le développement web côté client ?',
      options: [
        'a) Java',
        'b) Python',
        'c) JavaScript',
        'd) C++'
      ],
      correctOption: 'c) JavaScript'
    },
    {
      text: 'Question 2 : Quel est l\'outil couramment utilisé pour gérer les dépendances d\'un projet Node.js ?',
      options: [
        'a) NPM',
        'b) Gulp',
        'c) Yarn',
        'd) Bower'
      ],
      correctOption: 'a) NPM'
    },
    {
      text: 'Question 3 : Quelle est la base de données couramment utilisée pour le développement web Full Stack ?',
      options: [
        'a) SQLite',
        'b) MongoDB',
        'c) Redis',
        'd) MySQL'
      ],
      correctOption: 'b) MongoDB'
    },
    {
      text: 'Question 4 : Quel framework est couramment utilisé pour le développement web côté serveur en JavaScript ?',
      options: [
        'a) Django',
        'b) Express.js',
        'c) Ruby on Rails',
        'd) Flask'
      ],
      correctOption: 'b) Express.js'
    },
    {
      text: 'Question 5 : Quelle est la fonction JavaScript utilisée pour ajouter un élément à la fin d\'un tableau ?',
      options: [
        'a) array.push()',
        'b) array.add()',
        'c) array.append()',
        'd) array.insert()'
      ],
      correctOption: 'a) array.push()'
    },
    {
      text: 'Question 6 : Quelle méthode est utilisée pour déclarer une variable en JavaScript ?',
      options: [
        'a) var',
        'b) let',
        'c) const',
        'd) variable'
      ],
      correctOption: 'b) let'
    },
    {
      text: 'Question 7 : Quel est l\'élément HTML couramment utilisé pour créer un lien hypertexte ?',
      options: [
        'a) &lt;a&gt;',
        'b) &lt;link&gt;',
        'c) &lt;href&gt;',
        'd) &lt;url&gt;'
      ],
      correctOption: 'a) &lt;a&gt;'
    },
    {
      text: 'Question 8 : Quelle balise HTML est utilisée pour afficher une image ?',
      options: [
        'a) &lt;img&gt;',
        'b) &lt;picture&gt;',
        'c) &lt;image&gt;',
        'd) &lt;img src=""&gt;'
      ],
      correctOption: 'a) &lt;img&gt;'
    },
    {
      text: 'Question 9 : Quel événement JavaScript est déclenché lorsqu\'un utilisateur clique sur un élément HTML ?',
      options: [
        'a) onhover',
        'b) onmove',
        'c) onclick',
        'd) onsubmit'
      ],
      correctOption: 'c) onclick'
    },
    {
      text: 'Question 10 : Quelle méthode est utilisée pour changer le contenu HTML d\'un élément avec JavaScript ?',
      options: [
        'a) element.innerHTML',
        'b) element.changeHTML',
        'c) element.setHTML',
        'd) element.contentHTML'
      ],
      correctOption: 'a) element.innerHTML'
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

export default EpreuveFinale;
