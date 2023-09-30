import { Component, useState } from 'react';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Login from '../components/Login';
import Navbar from '../components/Navbar';
import Signup from '../components/Signup';
import CreateTodo from '../components/createTodo';
import Update from '../components/Update';


import './App.css'

function App() {
  

  return (
    <div style={{width:"100vw",height:"99vh" ,backgroundColor:"#ebeff3"}}>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path ={"/login"} element={<Login />}></Route>
          <Route path ={"/signup"} element={<Signup />}></Route>
          <Route path ={"/createtodo"} element={<CreateTodo />}></Route>
          <Route path ={"/update"} element={<Update/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App
