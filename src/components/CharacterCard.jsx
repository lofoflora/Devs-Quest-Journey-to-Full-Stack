import React from 'react';

const CharacterCard = ({ character }) => {
  const { avatar, nom, niveau, specialisation } = character;

  return (
    <div className="card" style={{width: "18rem"}}>
      <img src={avatar} className="card-img-top" alt={nom} />
      <div className="card-body">
        <h5 className="card-title">{nom}</h5>
        <p className="card-text">Niveau: {niveau}</p>
        <p className="card-text">Spécialisation: {specialisation}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
