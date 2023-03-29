import { useState } from 'react'


import './App.css'
// import Content from './Content'
import NavBar from './NavBar'
import Content from './Content'
// import FLCard from './FLCard'
// import FlxCont from './FlxCont'
// import HIphone from './HIphone'


function App() {
  const [Show, setShow] = useState(true)

  return (
    <div className="App mx-auto">
    <NavBar />
    <Content />
      {/* <FlxCont /> */}
    </div>
  )
}

export default App
