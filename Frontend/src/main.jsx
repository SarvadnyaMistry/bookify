import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home/Home.jsx'
import Course from './components/Course.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Courses from './components/courses/Courses.jsx'
import Signup from './components/Signup.jsx'
import { Toaster } from 'react-hot-toast'
import AuthProvider from './context/Authprovider.jsx'
//import AuthProvider from './context/AuthProvider.jsx' // ✅ Import AuthProvider

createRoot(document.getElementById('root')).render(
  
  
  <StrictMode>
    
    <AuthProvider>  {/* ✅ Wrap everything inside AuthProvider */}
      <BrowserRouter>
        <div className='dark-bg-slate-900 dark-text-white'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/course' element={<Courses />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
          <Toaster />
        </div>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
)
