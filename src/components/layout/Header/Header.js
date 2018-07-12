import React from 'react';
import { NavLink as Link } from 'react-router-dom';

import logo from './devmountainlogo.png'
import './Header.css'

const Header = props => (
  <div id="Header">
    <div id="HeaderContents">
      <img src={logo} />
      <nav>
        <span>
          <Link to="/campuses" className="navLink" activeClassName="active">Campuses</Link>
        </span>
        <span>
          <Link to="/instructors" className="navLink" activeClassName="active">Instructors</Link>
        </span>
        <span>
          <Link to="/cohorts" className="navLink" activeClassName="active">Cohorts</Link>
        </span>
        <span>
          <Link to="/students" className="navLink" activeClassName="active">Student Progress</Link>
        </span>
        <span>
          <Link to="/classes" className="navLink" activeClassName="active">Classes</Link>
        </span>
        <span>
          <Link to="/login" className="navLink" activeClassName="active">Login</Link>
        </span>
        <button>Get User Guide</button>
      </nav>
    </div>
    {/* <div id="HeaderContents2">
      <div id="logoContainer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/PEO-ocean_dive_view.svg/2000px-PEO-ocean_dive_view.svg.png" />
        <h1>DEVOCEAN</h1>
      </div>
      <nav>
        <span>
          <Link to="/">Campuses</Link>
        </span>
        <span>
          <Link to="/">Instructors</Link>
        </span>
        <span>
          <Link to="/">Cohorts</Link>
        </span>
        <span>
          <Link to="/">Student Progress</Link>
        </span>
        <span>
          <Link to="/">Login</Link>
        </span>
        <button>Get User Guide</button>
      </nav>

    </div> */}
  </div>
)

export default Header;