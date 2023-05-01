import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary "  >
                    <div className="container-fluid ">
                        <Link className="navbar-brand" to="/Features">NewNews </Link>
                        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse sticky top" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/Features">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Features">Features</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Crime">Crime</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Food">Food</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Bitcoin">Bitcoin</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Tesla">Tesla</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Disease">Disease</Link>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                    <button className="btn btn-outline-danger" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}
