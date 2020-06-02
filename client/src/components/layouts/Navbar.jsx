import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { logOutUser } from './../../actions/authaction'
import { clearCurrentProfile } from './../../actions/profileactions'
class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile()
    this.props.logOutUser()

  }



  render() {

    const { isAuthenticated, user } = this.props.auth
    const authLinks = (<ul className="navbar-nav ml-auto">

      <li className='nav-item' >
        <a href="/dashboard" className="nav-link" style={{ color: '#03e9f4' }} >

          <img src={`/users/${user.username}/avtaar`} alt={user.username} className='rounded-circle ' style={{ width: '50px', marginRight: '5px' }}
          />
        </a>
      </li>
      <li className="nav-item">
        <Link className="nav-link  mt-3" to="/signup" style={{ color: '#03e9f4' }}   >Dashboard</Link>
      </li>

      <li className="nav-item">
        <a href="/" onClick={this.onLogoutClick.bind(this)} className="nav-link mt-3" style={{ color: '#03e9f4' }}  >

          Logout
    </a>
      </li>


    </ul>)
    const guestLinks = (<ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/signup" style={{ color: '#03e9f4' }}   >Sign Up</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login" style={{ color: '#03e9f4' }} >Login</Link>

      </li>
    </ul>)


    return (<nav className="navbar navbar-expand-sm  mb-4" style={{ backgroundColor: '#131419' }}>
      <div className="container">
        <Link className="navbar-brand" to="/"> <img src={`${process.env.PUBLIC_URL}/assests/img/logo.png`} style={{ width: '70px' }} alt="" />  </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
          <span className="navbar-toggler-icon " style={{ backgroundColor: 'White', color: 'black', fontSize: '20px', fontWeight: '60', paddingTop: '4px' }}   > 三</span>
        </button>
        <div className="collapse navbar-collapse" id="mobile-nav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="profiles.html" style={{ color: '#03e9f4' }}>Trending
          </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="profiles.html" style={{ color: '#03e9f4' }}>Topics
          </Link>
            </li>
          </ul>
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </div>
    </nav>

    )
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth
})
Navbar.propTypes = {
  logOutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  clearCurrentProfile: PropTypes.func
}




export default connect(mapStateToProps, { logOutUser, clearCurrentProfile })(withRouter(Navbar))
