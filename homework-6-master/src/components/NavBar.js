import React, { Component } from 'react';
import {Link} from 'react-router-dom';

 function NavBar(){
     return (<nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">ACA Online Shop</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/shop/food">Shop</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>)
}
export default NavBar;