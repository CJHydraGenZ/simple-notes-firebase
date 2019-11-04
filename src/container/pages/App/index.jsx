import React from 'react';
import logo from '../../../assets/img/logo/logo.svg';
import './App.css';

import {
  BrowserRouter as Router,

  Route,
  Link
} from "react-router-dom";
import Dasboard from '../Dashboard/Dasboard';
import Register from '../Register/Register'
import Login from '../Login/Login'
// import { register } from '../../../serviceWorker';

function App() {
  return (
    <Router>
      <div>
        <Route path='/' exact component={Dasboard}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/register' component={Register}></Route>

      </div>
    </Router>
  );
}

export default App;