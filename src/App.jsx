import { useState } from 'react'
import {HashRouter as Router, Routes, Route} from "react-dom"
import HomePage from './pages/HomePage.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={HomePage}/>
      </Routes>
    </Router>
  )
}

export default App
