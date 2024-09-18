// src/App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Login';
import Navbar from './Navbar';
import Signup from './Signup';

function App() {
    return (
        <Router>
          <Navbar />
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <nav>
                    {/* <Link to="/login" style={{ margin: '0 10px' }}>Login</Link> */}
                    {/* <Link to="/signup" style={{ margin: '0 10px' }}>Signup</Link> */}
                </nav>

                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
