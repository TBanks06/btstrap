import { useState } from 'react'


import './App.css'
// import Content from './Content'
import NavBar from './NavBar'

// import FlxCont from './FlxCont'
// import HIphone from './HIphone'


function App() {
  const [Show, setShow] = useState(true)

  return (
    <div className="App">
    <NavBar />
      {/* <FlxCont /> */}
    </div>
  )
}

export default App
