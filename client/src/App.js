import React, { Component } from 'react'
// import ReactDOM from 'react-dom';
import {BrowserRouter ,Route} from 'react-router-dom' 
import Signup from './components/auth/signup'
import Login from './components/auth/login'


export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path='/login' exact={true} component={Login}  />  
          <Route path='/signup' exact={true} component={Signup}  />  

        </BrowserRouter>

      </div>
    )
  }
}



