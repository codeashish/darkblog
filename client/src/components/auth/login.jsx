import React, { Component } from 'react'
import './../css/login.css'
import Inputfields from './../common/inputfields'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { loginUser } from './../../actions/authaction'
import { Link } from 'react-router-dom'
class Login extends Component {

  constructor() {
    super()
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = {
      username: '',
      password: '',
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
      this.props.history.push('/dashboard')
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard')
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }
  }

  async onSubmit(e) {
    e.preventDefault()
    const userData = {
      username: this.state.username.toLowerCase(),
      password: this.state.password
    }
    this.props.loginUser(userData)

  }



  render() {
    const { errors } = this.state
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}  >
        <section className="showcase">
          <div className="video-container">
            <video src={`${process.env.PUBLIC_URL}/assests/video/video.webm`} autoPlay muted loop />
          </div>
        </section>
        <div className="form content">
          <Link to='/' > <img src={`${process.env.PUBLIC_URL}/assests/img/logo.png`} style={{ width: '100px', height: '90px' }} alt="logo" /></Link>
          <h2>Login</h2>
          <form onSubmit={this.onSubmit} id="formaction" className="form-group">
            <span />
            <span />
            <span />
            <span />
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
                label='Password'
                type='Password'
                placeholder='Enter Password'
                name='password'
                onChange={this.onChange}
                value={this.state.password}
                errors={errors.password}
              />

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
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(withRouter(Login))



// mongodb+srv://darkblog:Ashish@cluster0-jhcwq.mongodb.net/Darkblog
// MONGO_URL=mongodb+srv://darkblog:Ashish@cluster0-jhcwq.mongodb.net/Darkblog?retryWrites=true&w=majority
