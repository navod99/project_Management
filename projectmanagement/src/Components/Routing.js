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
import ProtectedRoute from '../utils/ProtectedRoute';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Login />} />
        <Route path='/signup' exact element={<Signup />} />
        {/* <Route path='/' exact element={<ProtectedRoute component={Home} />} /> */}
          {/* <Route exact path='/' element={<Home/>}> */}

        {/* </Route> */}
        {/* <Route path='/add' exact element={<AddProject />} /> */}
        <Route path='/dashboard' exact element={<Dashboard />} />
{/* 
        <Route exact path="/reset">
          <Reset />
        </Route> */}
        
        {/* <Route exact path='/home' element={<ProtectedRoute/>}>
            <Route exact path='/home' element={<Home/>}/>
        </Route> */}

        <Route
          path="/add"
          element={
            <ProtectedRoute component={AddProject}/>           
             
          }
        />
          <Route
          path="/home"
          element={
            <ProtectedRoute component={Home}/>           
             
          }
        />

        {/* 

        <Route exact path="/">
          <Home />
        </Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default Routing