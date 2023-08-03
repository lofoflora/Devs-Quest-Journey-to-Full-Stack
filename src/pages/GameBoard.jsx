import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CharacterCard from '../components/CharacterCard'
import InventoryCard from '../components/InventoryCard'
import TasksCard from '../components/TasksCard';

function GameBoard() {
  let { id } = useParams();
  let [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`/api/characters/${id}`)
      .then(res => res.json())
      .then(character => setCharacter(character))
  }, [])
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
          <TasksCard />
        </div>
      </div>
    </div>
  )
}

export default GameBoard