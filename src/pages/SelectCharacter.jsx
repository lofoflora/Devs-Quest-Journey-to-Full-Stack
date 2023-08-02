import { useEffect, useState } from 'react';
import CharacterCard from '../components/CharacterCard'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

function SelectCharacter() {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch('/api/characters')
      .then(res => res.json())
      .then(characters => setCharacters(characters))
  }, [])

  return (
    <div className="container">
      <div className="row">
        {characters.map((char, index) => (
          <div key={index}
            className="col-lg-3 col-md-6 col-sm-12 cursor-pointer"
            onClick={() => navigate(`/character/${char.id}`)}>
            <CharacterCard character={char} />
          </div>
        ))}
        <div className="col-lg-3 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
          <Link to="/create-character">
            <div className="card h-100 d-flex align-items-center justify-content-center">
              <span className="display-1">+</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SelectCharacter