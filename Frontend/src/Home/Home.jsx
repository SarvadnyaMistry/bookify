import React from 'react'
import App from '../App'
import Navbar from '../components/navbar'
import Banner from '../components/Banner'
import Freebook from '../components/Freebook'
import Footer from '../components/Footer'
import Login from '../components/Login'

function Home() {
  return (
    <>
    <App />
    <Navbar/>
    <Banner/> 
    <Freebook/>
    {/* <Cards/> */}
    <Footer/>
    </>
  )
}

export default Home