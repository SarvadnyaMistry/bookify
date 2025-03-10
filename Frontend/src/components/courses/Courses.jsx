import React from 'react'
import Navbar from '../navbar'
import Course from '../Course'
import Footer from '../Footer'


function Courses() {
  return (
    <>
    <Navbar/>
   
   <div className='min-h-screen'>
   <Course/>
    </div> 
    <Footer/>
    </>
  )
}

export default Courses