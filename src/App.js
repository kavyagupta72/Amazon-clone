import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import React, { useState, useEffect } from "react";


function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //loads only once when the component loads
    onAuthStateChanged(auth, (authUser) => {
      if (authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  })
  return (
    <Router>
      <div className="App">
        <Routes>

          <Route path="/login" element={<Login/>}/>

          <Route path="/" element={[<Header />, <Home />]} />

          <Route path="/checkout" element={[<Header />, <Checkout />]} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
