import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { CatchMe } from './components/CatchMe'
import { ChangeColorCircle } from './components/ChangeColorCircle'
import { SortAnimals } from './components/SortAnimals'
import './style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <h1>React Challenge 2 🥊</h1>
     <ChangeColorCircle />
     <SortAnimals />
     <CatchMe />
    </div>
  )
}

export default App
