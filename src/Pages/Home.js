import React from 'react'
import RowPost from '../components/RowPost/RowPost'
import Header from '../components/Header/Header'
import WallPaper from '../components/WallPaper/WallPaper'
import {originals, action, ComedyMovies, HorrorMovies} from './urls'



function Home() {
  return (
    <div style={{ backgroundColor: 'black' }}>
        <Header />
        <WallPaper />
        <RowPost url={originals} title = 'Netflix originals'/>
        <RowPost url={action} title = 'Action' isSmall/>
        <RowPost url={ComedyMovies} title = 'Comedy Movies' isSmall/>
        <RowPost url={HorrorMovies} title = 'Horror Movies' isSmall/>
    </div>
  )
}

export default Home
