import React from "react";
import { Link } from "react-router-dom";
import '../App.css'

function Navbar() {
    //huddi shu korinishda lyuboy elementinga ishlov bersen boladi
    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    }

    //link bosa kak a href rolini oynavoti bosilganda boshqa URL adresga otadi
  return (
    <div>
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link to="/" style={navStyle}>
                    <li>Home</li>
                </Link>
                <Link to="/about" style={navStyle}>
                    <li>About</li>
                </Link>
                <Link to="/contact" style={navStyle}>
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    </div>
  );
}

export default Navbar;
