import React from 'react';
// import logo from '../../../assets/img/logo/logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Dasboard from '../Dashboard/Dasboard';
import Register from '../Register/Register'
import Login from '../Login/Login'
import { Provider } from 'react-redux'
import { store } from '../../../config/redux/redux'





function App() {
  return (
    <Provider store={store} >
      <Router >
        <div >
          <Route path='/' exact component={Dasboard} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </div>
      </Router>
    </Provider>


  );
}

export default App;