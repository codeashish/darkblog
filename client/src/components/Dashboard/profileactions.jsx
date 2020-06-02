import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Profileactions extends Component {
    render() {
        return (
            <div style={{ paddingTop: '10px' }}    >
                <div className="btn-group sm-2 mb-4" role="group">
                    <Link to="/edit-profile" className="btn btn-light" style={{ color: '#03e9f4', background: '#131419', borderRadius: '4px', border: '2px solid #03e9f4', margin: '4px' }} >
                        <i className="fas fa-user-circle text-info mr-1" /> Edit Profile</Link>
                    <Link to="/add-experience" style={{ color: '#03e9f4', background: '#131419', borderRadius: '4px', border: '2px solid #03e9f4', margin: '4px' }} className="btn btn-light">
                        <i className="fab fa-black-tie text-info mr-1" />
                            Add Experience</Link>
                    <Link to="/add-education" style={{ color: '#03e9f4', background: '#131419', borderRadius: '4px', border: '2px solid #03e9f4', margin: '4px' }} className="btn btn-light">
                        <i className="fas fa-graduation-cap text-info mr-1" />
                                Add Education</Link>
                </div>

            </div>
        )
    }
}

export default Profileactions