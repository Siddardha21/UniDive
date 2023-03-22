import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavbarV2 extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'

        return (
           <header className="site-header-two site-header-two__ go-top  go-top">
			  <nav className="main-nav__two stricky">
			    <div className="container">
			      <div className="main-nav__logo-box">
			        <Link to="/">
			          <img src={publicUrl+"assets/images/logo-dark.svg"} alt={ "UniDive Logo" }/>
			        </Link>
			      </div>
			      <div className="main-nav__main-navigation">
			        <ul className=" main-nav__navigation-box">
					{/* <li>
			            <Link to="/dashboard">Dashboard</Link>
			          </li> */}
			          <li>
			            <Link to="/about">About</Link>
			          </li>
					  <li>
			            <Link to="/service">Services</Link>
			          </li>
			          <li className="dropdown">
			            <a href="/pricing">Go Premium</a>
			            <ul>
			              <li><Link to="/pricing">Pricing</Link></li>
			              <li><Link to="/faq">FAQ</Link></li>
			            </ul>
			          </li>
			          <li>
			            <Link to="/contact">Contact</Link>
			          </li>
			        </ul>
			      </div>
				  <div className="main-nav__right">
			        <Link to="#" className="thm-btn">Log-in / Sign-up</Link>
			      </div>
			    </div>
			  </nav>
			</header>
        )
    }
}


export default NavbarV2