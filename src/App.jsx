import { Routes, Route } from 'react-router-dom'
import SelectCharacter from "./pages/SelectCharacter"
import CreateCharacter from './pages/CreateCharacter'
import CreateItem from './pages/CreateItem';
import GameBoard from './pages/GameBoard'
import { useNavigate } from 'react-router';
import "./app.css"

function App() {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="jumbotron jumbotron-fluid cursor-pointer"
        style={{ padding: "1rem 1rem" }}
        onClick={() => navigate('/')}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="display-4 h5-xs">Dev's Quest: Journey to FullStack</h1>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route index element={<SelectCharacter />} />
        <Route path="/character/:id" element={<GameBoard />} />
        <Route path="/create-character" element={<CreateCharacter />} />
        <Route path="/create-item" element={<CreateItem/>} />
      </Routes>
    </>
  )
}

export default App
