import { useState } from 'react'
import Navbar from './component/Navbar'
import HomePage from './component/Home'
import LoginPage from './component/auth/Login'
import RegisterPage from './component/auth/Register'
import Posts from './component/Posts'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
     <Route path='/' element={<HomePage/>} />
     <Route path='/login' element={<LoginPage/>}/>
     <Route path='/Register' element={ <RegisterPage/>}/>
     <Route path='/Posts' element={ <Posts/>}/>

    </Routes>

    </Router>
     
    </>
  )
}

export default App
