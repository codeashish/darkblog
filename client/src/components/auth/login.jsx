import React, { Component } from 'react'
import './../css/login.css'

export default class Login extends Component {

constructor(){
  super()
  this.state={
    username:'',
    password:'',
    errors:{}
  }

}




    render() {
        return (
            <div>
            <section className="showcase">
              <div className="video-container">
                <video src=  {`${process.env.PUBLIC_URL}/assests/video/video.webm`} autoPlay muted loop />
              </div>
            </section>
            <div className="form content">
              <img src={`${process.env.PUBLIC_URL}/assests/img/logo.png`} width="100px" alt="logo" />
              <h2>Login</h2>
              <form onSubmit={this.onSubmit} id="formaction" className="form-group">
                <span />
                <span />
                <span />
                <span />
                <div className="input">
                  <div className="inputBox">
                    <label >Username</label>
                    <input type="text" onChange={this.onChange} value={this.state.username}  name="username" placeholder="Username" />
                  </div>
                  <div className="inputBox">
                    <label >Password</label>
                    <input type="Password"  value={this.state.password} onChange={this.onChange} name="password" placeholder="Password" />
                  </div>
                </div>
                <div className="inputBox">
                  <button type="submit" id="link">
                    <span />
                    <span />
                    <span />
                    <span />
                    Login
                  </button>
                </div>
              </form></div>
          </div>
          
        )
    }
}
