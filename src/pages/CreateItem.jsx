import { useState } from 'react';
import { useNavigate } from 'react-router';

function CreateItem() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [bonus, setBonus] = useState('');
  const [malus, setMalus] = useState('');
  const [price, setPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description && price >= 0) {
      const item = { name, description, bonus, malus, price };
      fetch('/api/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item),
      })
        .then(res => res.json())
        .then(() => navigate('/'))
        .catch((error) => console.error(error));
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nom de l'item</label>
              <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description de l'item</label>
              <textarea className="form-control" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="bonus" className="form-label">Bonus de l'item</label>
              <input type="text" className="form-control" id="bonus" value={bonus} onChange={(e) => setBonus(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="malus" className="form-label">Malus de l'item</label>
              <input type="text" className="form-control" id="malus" value={malus} onChange={(e) => setMalus(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">Prix de l'item</label>
              <input type="number" className="form-control" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary w-100">Créer</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateItem;
