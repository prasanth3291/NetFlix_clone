import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Banner from '../components/Banner/Banner'
import Category from '../components/Categories/Category'
import Footer from '../components/Footer/Footer'
import Quesstions from '../components/Questions/Quesstions'

function Guest() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Category />
      <Quesstions />
      <Footer />
    </div>
  )
}

export default Guest
