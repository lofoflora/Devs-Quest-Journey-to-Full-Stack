import { useState, useEffect } from 'react';
import Item from './Item';

const InventoryCard = ({ charId }) => {
  const [items, setItems] = useState([])

  useEffect(() => {
    if (charId) {
      fetch(`/api/characters/${charId}/items`)
        .then(res => res.json())
        .then(items => setItems(items))
    }
  }, [charId])
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">Inventaire</div>
        <div className="card-text">
          {items.map((item, index) => <Item item={item} key={index} />)}
        </div>
      </div>
    </div>
  );
};

export default InventoryCard;
