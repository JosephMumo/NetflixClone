import React from 'react'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import AuthContextProvider from './context/AuthContext'
import Account from './pages/Account'

function App() {
  return (
    <div className='overflow-x-hidden'>
      <AuthContextProvider>
      <NavBar />
        <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/account' element={<Account />}></Route>
        </Routes>
      </AuthContextProvider>
    </div>
  )
}

export default App