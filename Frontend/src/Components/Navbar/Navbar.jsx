import React, { useContext } from 'react';
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext.jsx";

const Navbar = ({ setShowLogin }) => {
    const { logout, setToken, token } = useContext(StoreContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.removeItem("token");
        setToken("");
        logout();
        navigate("/"); 
    };

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <div className="logo">
                    <Link to="/">
                        <img src="/Logo.png" alt="Logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link> {/* Changed to proper route */}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#contactus">Contact Us</Link>
                        </li>
                    </ul>
                    <Link to="/Emergency">
                        <button className='Emergency'>Emergency</button>
                    </Link>

                    {!token ? (
                        <button onClick={() => setShowLogin(true)} className='Login'>Login</button>
                    ) : (
                        <div className='navbar-profile'>
                            <Link to="/user">
                                <img src="/profile_icon.png" alt="Profile" />
                            </Link>
                            <ul className="navbar-profile-dropdown">
                                <li>
                                    <Link to="/user">Profile</Link> 
                                </li>
                                <hr />
                                <li onClick={handleLogOut}>Logout</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
