import { useEffect, useState } from 'react';

function SelectCharacter() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch('/api/characters').then(characters => setCharacters(characters))
  }, [])
  
  return (
    <div>
      {characters.map((char, index) => {
        return <div key={index}>{char.name}</div>
      })}
    </div>
  )
}

export default SelectCharacter