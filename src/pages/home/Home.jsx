import React from 'react'
import "./style.scss"
import Herobanner from './Herobanner/Herobanner'
import Trending from './Trending/Trending'
import Popular from './popular/Popular'
import Toprated from './toprated/Toprated'
const Home = () => {
  return (
    <div className='homepage'>
     <Herobanner/>
     <Trending/>
     <Popular/>
     <Toprated/>
    </div>
  )
}

export default Home
