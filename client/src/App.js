import logo from './logo.svg';
import './App.css';
import React, { useContext, useState } from 'react'
import Topbar from './components/topbar/Topbar'
import Post from './components/post/Post'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import Write from './pages/write/Write'
import Home from './pages/home/Home'
import Setting from './pages/setting/Setting'
import SinglePost from './components/singlepost/singlePost';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import { myContext } from './context/Context';

function App() {
  const {user} = useContext(myContext)
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route exact path = '/' element={<Home />} />  
        <Route exact path = '/signup' element ={user ? <Home /> :<Signup />} /> 
        <Route exact path ='/login' element={user ? <Home /> :<Login />} /> 
        <Route exact path='/write' element={user ? <Write/> :<Signup />} />
        <Route exact path='setting' element={user ?<Setting/> :<Signup/>} />
        <Route exact path='/post/:userId' element={<SinglePost/> } />
      </Routes>
    </Router>
  );
}

export default App;
