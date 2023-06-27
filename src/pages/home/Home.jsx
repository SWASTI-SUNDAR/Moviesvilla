import React from 'react'
import "./style.scss"
import Herobanner from './Herobanner/Herobanner'
import Trending from './Trending/Trending'
const Home = () => {
  return (
    <div className='homepage'>
     <Herobanner/>
     <Trending/>
     <div style={{height:"1000px"}}>
     </div>
    </div>
  )
}

export default Home
