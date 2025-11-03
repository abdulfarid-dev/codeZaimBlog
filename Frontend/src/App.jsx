import { useState } from 'react'
import Navbar from './componenet/Navbar'
import HomePage from './componenet/Home'
import LoginPage from './componenet/auth/Login'
import RegisterPage from './componenet/auth/Register'
import Posts from './componenet/Posts'

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
