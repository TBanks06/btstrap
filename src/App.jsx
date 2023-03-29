import { useState } from 'react'


import './App.css'
import NewG from './NewG'

function App() {
  const [Show, setShow] = useState(true)

  return (
    <div className="App">
      <NewG />
    </div>
  )
}

export default App
