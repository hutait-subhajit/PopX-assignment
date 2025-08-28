import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Notfound from './pages/Notfound'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Home from './pages/Homes';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/signup' element={<  Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={< Profile />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
