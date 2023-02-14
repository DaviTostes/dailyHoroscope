import './App.css'
import React from 'react'
import { useState } from 'react'

import Signs from './components/signs'
import Resume from './components/resume'
import callback from './utils/callApi'

function App() {
  const [resume, setResume] = useState({})

  const callApi = async (sign) => {
    console.log(await callback(sign))
  }

  return (
    <div className="App">
      <header>
        <h1>⭐Daily Horoscope⭐</h1>
      </header>
      <main>
        <Signs handleCallApi={callApi} />
        <Resume />
      </main>
      <footer>
        <p>Made by <a target="_blank" href="https://github.com/davitostes">Davi Tostes</a></p>
      </footer>
    </div>
  )
}

export default App
