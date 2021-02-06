import React from 'react'
// import {
//     BrowserRouter as Router,
//   } from "react-router-dom";
// import {Link,Route,Switch} from 'react-router-dom';

import './Navbar.css';
// import About from './About';


// Function name matches file name
const Navbar = () => {
    // return must have one parent element
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03"
                aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/cards.html">Cards</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about.html">About</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

// Makes it available for import
export default Navbar;