import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home/Home.jsx'
import Course from './components/Course.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Courses from './components/courses/Courses.jsx'
import Signup from './components/Signup.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
 <div className='dark-bg-slate-900 dark-text-white'>
  
 <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<Courses/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
 </div>
    </BrowserRouter>
)
