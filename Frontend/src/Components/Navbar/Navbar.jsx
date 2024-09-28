import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"
const Navbar = ({setShowLogin}) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                <div className="logo">
                   <Link to="/">
                    <img src="/Logo.png"/>
                   </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contactus">Contact Us</a>
                            </li>                          
                        </ul>
                        <button onClick={()=>setShowLogin(true)} className='Login'>Login</button>
                            <Link to="/Emergency">
                            <button className='Emergency'>Emergency</button>
                            </Link>
                    </div>
                </div>
            </nav>

        </>

    )
}

export default Navbar
