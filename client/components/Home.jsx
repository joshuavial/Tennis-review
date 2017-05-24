import React from 'react'

import {Link} from 'react-router-dom'
import Reviews from './Reviews'



const Home = () => {
  return (
    <div className='home'>
      <h1 className="main-heading"><Link to='/Reviews'>Review my Tennis Match</Link></h1>
      <button>Find a review</button>
      <button> Write a review</button>
    </div>
  )
}

export default Home
