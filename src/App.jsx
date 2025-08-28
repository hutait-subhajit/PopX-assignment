import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Notfound from './pages/Notfound'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/home'
import Profile from './pages/Profile'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/signup' Component={Signup} />
        <Route path='/login' Component={Login} />
        <Route path='/profile' Component={Profile} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
