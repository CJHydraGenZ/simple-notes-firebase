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
// import { register } from '../../../serviceWorker';
import {
  createStore
} from 'redux'
import { Provider } from 'react-redux'


const initialState = {
  popup: false,
  isLogin: false
}
const reduser = (state = initialState, action) => {

  if (action.type === 'CHANGE_POPUP') {
    return {
      ...state,
      popup: action.value
    }
  }
  if (action.type === 'CHANGE_ISLOGIN') {
    return {
      ...state,
      popup: action.value
    }
  }

  return state
}

const store = createStore(reduser)

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