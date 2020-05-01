import React, { Component } from 'react'
import classnames from 'classnames'
import axios from 'axios'
import './../css/signup.css'

export default class Signup extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = {
      username: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    }

  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value

    })
  }

  async onSubmit(e) {
    e.preventDefault()
    const newUser = {
      username: this.state.username.toLowerCase(),
      email: this.state.email.toLowerCase(),
      password: this.state.password,
      password2: this.state.password2
    }

    try {
       await axios.post('/users/register', newUser)
      console.log("sucessfull")

    }
    catch (err) {
      this.setState({
        errors: err.response.data
      })

      // console.log(err.response.data)
    }
  }


  render() {
    const { errors } = this.state
    // console.log(errors)
    return (
      <div>
        <section className="showcase">
          <div className="video-container">
            <video src={`${process.env.PUBLIC_URL}/assests/video/video.webm`} autoPlay muted loop />
          </div>
        </section>
        <div className="form content">
          <h2>Signup</h2>
          <form onSubmit={this.onSubmit} id="formaction" className="form-group">
            <img src={`${process.env.PUBLIC_URL}/assests/img/logo.png`} width="100px" alt="" />

            <div className="input">
              <div className="inputBox">
                <label >Username</label>
                <input type="text" value={this.state.username} className={classnames('form-control form-control-lg', { 'is-invalid': errors.username })} onChange={this.onChange} name="username" placeholder="Username" />

              {errors.username && <div  className='invalid-feedback' > {errors.username}  </div>}


              </div>

              <div className="inputBox">
                <label >Email</label>
                <input type="text" name="email" style={{fontSize:'18px'}}  className={classnames('form-control form-control-lg', { 'is-invalid': errors.email })} value={this.state.email} onChange={this.onChange} placeholder="Enter your email" />
                {errors.email && <div  className='invalid-feedback' > {errors.email}  </div>}

              </div>
              <div className="inputBox">
                <label >Password</label>
                <input type="Password" className={classnames('form-control form-control-lg', { 'is-invalid': errors.password })} name="password" placeholder="Password" value={this.state.password} onChange={this.onChange} />
                {errors.password && <div  className='invalid-feedback' style={{}}  > {errors.password}  </div>}


              </div>
              <div className="inputBox">
                <label >Conform Password</label>
                <input type="Password" name="password2" className={classnames('form-control form-control-lg', { 'is-invalid': errors.password2 })} placeholder="Password" value={this.state.password2} onChange={this.onChange} />
                {errors.password2 && <div  className='invalid-feedback' > {errors.password2}  </div>}

              </div>
            </div>
            <div className="inputBox">
              <button type="submit" id="link">
                <span />
                <span />
                <span />
                <span />
          Signup
        </button>
            </div>
          </form>
        </div>
      </div>

    )
  }
}
