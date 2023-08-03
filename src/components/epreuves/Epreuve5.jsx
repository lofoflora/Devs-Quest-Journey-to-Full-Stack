import React, { useState } from 'react';
import Question from '../Question';

const Epreuve5 = ({ onAnswer }) => {
  const tasks = [
    {
      title: "Tâche 1 : Le Test Zombie : Survivre à l'Invasion",
      summary: "Faire face à une horde de tests zombie qui menacent de paralyser l'application Node.js. Réparer les tests défectueux pour restaurer l'ordre et la stabilité."
    },
    {
      title: "Tâche 2 : Le Rituel de Passage à Node.js",
      summary: "Accomplir un rituel mystique pour devenir un développeur Node.js certifié. Créer une application simple en Node.js pour prouver sa maîtrise."
    },
    {
      title: "Tâche 3 : Le Combat des Routes Ensorcelées",
      summary: "Créer des routes ensorcelées en utilisant Express.js pour gérer les requêtes HTTP. Utiliser les routes pour diriger le trafic vers les différentes fonctionnalités de l'application."
    },
    {
      title: "Tâche 4 : La Confrontation avec le Dragon de Node.js",
      summary: "Affronter un dragon redoutable créé en Node.js. Utiliser les compétences en Node.js pour résoudre les énigmes et vaincre le dragon."
    },
    {
      title: "Tâche 5 : La Danse Magique des Middleware",
      summary: "Maîtriser la danse magique des middleware en Express.js. Utiliser les middleware pour ajouter des fonctionnalités spéciales à l'application."
    },
    {
      title: "Tâche 6 : Le Défi des Fonctions Asynchrones",
      summary: "Surmonter le défi des fonctions asynchrones en Node.js. Utiliser des méthodes pour gérer efficacement les opérations asynchrones."
    },
    {
      title: "Tâche 7 : Le Mystère des Promesses Envoûtantes",
      summary: "Découvrir les promesses en Node.js et leur pouvoir de gestion des opérations asynchrones. Utiliser les promesses pour simplifier le code asynchrone et éviter les pièges."
    },
    {
      title: "Tâche 8 : La Course aux Modules Fantastiques",
      summary: "Participer à une course de modules fantastiques en Node.js. Utiliser les modules pour organiser le code et rendre l'application plus maintenable."
    },
    {
      title: "Tâche 9 : Le Rite des Tests End-to-End Ensorcelants",
      summary: "Mettre en place des tests end-to-end ensorcelants pour garantir le bon fonctionnement de l'application. Exécuter les tests pour s'assurer que toutes les fonctionnalités sont correctement implémentées."
    },
    {
      title: "Tâche 10 : Le Combat des API Enchantées",
      summary: "Créer des API enchantées en utilisant Express.js pour communiquer avec l'application. Tester les API pour s'assurer qu'elles répondent correctement aux requêtes."
    }
  ];

  const questions = [
    {
      text: 'Question 1 : Quelle est la méthode utilisée pour démarrer un serveur HTTP avec Express.js ?',
      options: [
        'a) express.listen()',
        'b) express.run()',
        'c) express.start()',
        'd) express.createServer()'
      ],
      correctOption: 'a) express.listen()'
    },
    {
      text: 'Question 2 : Quel module Node.js est utilisé pour gérer les opérations asynchrones avec des promesses ?',
      options: [
        'a) async/await',
        'b) bluebird',
        'c) fs',
        'd) http'
      ],
      correctOption: 'a) async/await'
    },
    {
      text: 'Question 3 : Comment ajouter un middleware pour traiter les erreurs dans Express.js ?',
      options: [
        'a) app.middleware(errorHandler)',
        'b) app.errorMiddleware(errorHandler)',
        'c) app.use(errorHandler)',
        'd) app.error(errorHandler)'
      ],
      correctOption: 'c) app.use(errorHandler)'
    },
    {
      text: 'Question 4 : Quelle méthode est utilisée pour exécuter des requêtes HTTP GET avec Node.js ?',
      options: [
        'a) fetch()',
        'b) http.get()',
        'c) http.request()',
        'd) axios.get()'
      ],
      correctOption: 'b) http.get()'
    },
    {
      text: 'Question 5 : Comment créer un serveur HTTP de base avec Node.js ?',
      options: [
        'a) createServer()',
        'b) startServer()',
        'c) runServer()',
        'd) initServer()'
      ],
      correctOption: 'a) createServer()'
    },
    {
      text: 'Question 6 : Quelle est la méthode utilisée pour lire un fichier asynchrone en Node.js ?',
      options: [
        'a) fs.readFile()',
        'b) fs.read()',
        'c) fs.loadFile()',
        'd) fs.open()'
      ],
      correctOption: 'a) fs.readFile()'
    },
    {
      text: 'Question 7 : Comment définir une route GET dans Express.js ?',
      options: [
        'a) app.getRoute()',
        'b) app.defineGet()',
        'c) app.route()',
        'd) app.get()'
      ],
      correctOption: 'd) app.get()'
    },
    {
      text: 'Question 8 : Quelle méthode est utilisée pour exécuter des requêtes HTTP POST avec Node.js ?',
      options: [
        'a) http.post()',
        'b) http.request()',
        'c) fetch()',
        'd) axios.post()'
      ],
      correctOption: 'b) http.request()'
    },
    {
      text: 'Question 9 : Comment importer un module personnalisé dans Node.js ?',
      options: [
        'a) import customModule from "./customModule"',
        'b) require customModule from "./customModule"',
        'c) include customModule from "./customModule"',
        'd) import { customModule } from "./customModule"'
      ],
      correctOption: 'b) require customModule from "./customModule"'
    },
    {
      text: 'Question 10 : Quelle méthode est utilisée pour gérer les requêtes HTTP DELETE avec Express.js ?',
      options: [
        'a) app.delete()',
        'b) app.remove()',
        'c) app.handleDelete()',
        'd) app.destroy()'
      ],
      correctOption: 'a) app.delete()'
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

export default Epreuve5;
