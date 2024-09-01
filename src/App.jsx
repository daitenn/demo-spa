import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [total, setTotal] = useState(0)

  const onClickToUpConunt = () => {
    setTotal(total + 1)
  }

  const onClickToDownCount = () => {
    if (total <= 0) {
      return
    }
    setTotal(total - 1)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h1>This is Counter Calculating App. Let's try it.</h1>
      <h1>{total}</h1>
      <div className="card">
        <h1>Count Up</h1>
        <button onClick={onClickToUpConunt}>
          Up
        </button>
      </div>
      <div className="card">
        <h1>Count Down</h1>
        <button onClick={onClickToDownCount}>
          Down
        </button>
        <p>Don't display on minus point</p>
      </div>
    </>
  )
}

export default App
