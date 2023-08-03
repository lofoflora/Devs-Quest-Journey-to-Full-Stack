import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CharacterCard from '../components/CharacterCard';
import InventoryCard from '../components/InventoryCard';
import TasksCard from '../components/TasksCard';
import EpreuveContainer from '../components/EpreuveContainer'; // Importez le composant EpreuveContainer

function GameBoard() {
  let { id } = useParams();
  let [character, setCharacter] = useState({});
  let [quizData, setQuizData] = useState(null); // État pour stocker les données du quiz
  let [isQuizStarted, setIsQuizStarted] = useState(false); // État pour indiquer si le quiz a commencé

  useEffect(() => {
    fetch(`/api/characters/${id}`)
      .then(res => res.json())
      .then(character => setCharacter(character));

    // Récupérez les données du quiz depuis l'API
    fetch('/api/quiz')
      .then(res => res.json())
      .then(data => setQuizData(data));
  }, []);

  // Fonction pour commencer le questionnaire
  const startQuiz = () => {
    setIsQuizStarted(true);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
          <CharacterCard character={character} />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
          <InventoryCard charId={character.id} />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
          <TasksCard tasks={quizData ? quizData.tasks : []} />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
          {/* Affichez le bouton "Commencer le questionnaire" si le quiz n'a pas encore commencé */}
          {!isQuizStarted ? (
            <button onClick={startQuiz}>Commencer le questionnaire</button>
          ) : (
            // Sinon, affichez l'épreuve en cours ou le message de fin du quiz
            <EpreuveContainer
              quizData={quizData}
              onEpreuveFinish={() => setIsQuizStarted(false)} // Remettre isQuizStarted à false quand toutes les épreuves sont terminées
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default GameBoard;
