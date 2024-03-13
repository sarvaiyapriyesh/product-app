import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" href="#">Shoes Bazaar</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {
                                !this.props.isLoggedIn ? (
                                    <li className="nav-item">
                                        <NavLink to="/" className="nav-link" activeclassName="active">Login</NavLink>
                                    </li>) : ""
                            }
                            {
                                (this.props.isLoggedIn) ? (
                                    <li className="nav-item">
                                        <NavLink  to="/cust" className="nav-link" activeclassName="active">Customer</NavLink>
                                    </li>) : ("")
                            }
                            {
                                (this.props.isLoggedIn) ? (
                                    <li className="nav-item">
                                        <NavLink to="/card" className="nav-link" activeclassName="active">Product</NavLink>
                                    </li>) : ("")
                            }
                            {
                                (this.props.isLoggedIn) ? (

                                    <li className="nav-item">
                                        <NavLink to="*" className="nav-link" activeclassName="active">Dashboard</NavLink>
                                    </li>) : ("")
                            }
                            {
                                (this.props.isLoggedIn) ? (

                                    <li className="nav-item">
                                        <NavLink to="/register" className="nav-link" activeclassName="active">Logout</NavLink>
                                    </li>) : ("")
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;