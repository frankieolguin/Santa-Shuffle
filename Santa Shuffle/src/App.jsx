import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage/HomePage'
import ShufflePage from './Create-A-Shuffle/ShufflePage'
import JoinShufflePage from './Join-A-Shuffle/JoinShufflePage'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-shuffle" element={<ShufflePage />} />
        <Route path="/join-shuffle" element={<JoinShufflePage />} />
      </Routes>
    </Router>
  )
}

export default App
