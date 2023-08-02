import { Routes, Route } from 'react-router-dom'
import SelectCharacter from "./pages/SelectCharacter"

function App() {

  return (
    <>
      HelLo
      <Routes>
        <Route index element={<SelectCharacter />} />
        <Route path="/game" element={<SelectCharacter />} />
      </Routes>
    </>
  )
}

export default App
