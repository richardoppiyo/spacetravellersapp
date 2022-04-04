import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ children }) => (
  <main>
    <header className="d-flex">
      <nav className="links">
        <NavLink to="/" className="link-item">Rockets</NavLink>
        <NavLink to="/Missions" className="link-item">Missions</NavLink>
        <NavLink to="/MyProfile" className="link-item">My Profile</NavLink>
      </nav>
    </header>
    {children}
  </main>
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
