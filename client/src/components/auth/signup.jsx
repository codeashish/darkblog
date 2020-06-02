import React, { Component } from 'react'
import { registerUser } from './../../actions/authaction'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import Inputfields from './../common/inputfields'
import { Link } from 'react-router-dom'
import './../css/signup.css'
class Signup extends Component {
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



  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/login')
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }
  }
  async onSubmit(e) {
    e.preventDefault()
    const newUser = {
      username: this.state.username.toLowerCase(),
      email: this.state.email.toLowerCase(),
      password: this.state.password,
      password2: this.state.password2
    }
    this.props.registerUser(newUser, this.props.history)
  }


  render() {
    const { errors } = this.state
    // console.log(errors)
    return (
      <div className='container' >
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxHeight: '800px' }} >
          <section className="showcase">
            <div className="video-container">
              <video src={`${process.env.PUBLIC_URL}/assests/video/video.webm`} autoPlay muted loop />
            </div>
          </section>
          <div className="form-group form content">
            <h2>Signup</h2>
            <form onSubmit={this.onSubmit} id="formaction" className="form-group">
              <Link to='/' >   <img src={`${process.env.PUBLIC_URL}/assests/img/logo.png`} style={{width:'100px',height:'90px'}} alt="" /></Link>

              <div className="input">


                <Inputfields
                  label='Username'
                  type='text'
                  placeholder='Username'
                  name='username'
                  onChange={this.onChange}
                  value={this.state.username}
                  errors={errors.username}
                />


                <Inputfields
                  label='Email'
                  type='text'
                  placeholder="Enter your Email"
                  name='email'
                  onChange={this.onChange}
                  value={this.state.email}
                  errors={errors.email}
                />


                <Inputfields
                  label='Password'
                  type='Password'
                  placeholder='Enter Password'
                  name='password'
                  onChange={this.onChange}
                  value={this.state.password}
                  errors={errors.password}
                />

                <Inputfields
                  label="Conform Password"
                  type='password'
                  placeholder='Conform Password'
                  name='password2'
                  onChange={this.onChange}
                  value={this.state.password2}
                  errors={errors.password2}
                   />


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
      </div>
    )
  }
}

Signup.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  user: PropTypes.object
}


const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, { registerUser })(withRouter(Signup))