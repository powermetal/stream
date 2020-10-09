import React from 'react';
import GoogleAuth from './GoogleAuth';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/">
                <h2>PlopTV!</h2>
            </Link>
            <div className="right menu">
                <GoogleAuth />
            </div>
        </div>
    );
};

export default Header;