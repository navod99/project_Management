import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import Home from './Home'
import AddProject from './AddProject';
import Dashboard from './Dashboard';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Login />} /> 
        <Route path='/signup' exact element={<Signup />} />
        <Route path='/home' exact element={<Home />} />
        <Route path='/add' exact element={<AddProject />} />
        <Route path='/dashboard' exact element={<Dashboard />} />
      </Routes>      
    </BrowserRouter>
  )
}

export default Routing