import React from 'react'
import FLCard from './FLCard'
import NewG from './NewG'


const FlxCont = props => {
  return (
    <div className='d-flex flex-column'>
        <NewG />
        <FLCard />
    </div>
  )
}


export default FlxCont