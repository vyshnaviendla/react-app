import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{ padding: '10px', background: 'linear-gradient(rgb(230, 230, 250), rgb(200, 200, 250))' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Link to="/" style={{ margin: '0 15px', textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Home</Link>
                <Link to="/profile" style={{ margin: '0 15px', textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Profile</Link>
            </div>
        </nav>
    );
}

export default Navbar;
