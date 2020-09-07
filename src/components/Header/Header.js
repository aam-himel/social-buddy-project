import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div className="nav">
           <header>
                <nav className="nav">
                    <a href="/">Home</a>
                    <a href="/posts">Posts</a>
                    {/* <Link to="/">Home</Link>
                    <Link to="/posts">Posts</Link> */}
                </nav>
           </header>
        </div>
    )
}

export default Header;
