import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ children }) => (
  <main>
    <header className="d-flex">
      <nav className="links">
        <NavLink style={({ isActive }) => ((isActive) ? { color: 'red' } : {})} to="/" className="link-item">Rockets</NavLink>
        <NavLink style={({ isActive }) => ((isActive) ? { color: 'red' } : {})} activeClassName="is-active" to="/Missions" className="link-item">Missions</NavLink>
        <NavLink style={({ isActive }) => ((isActive) ? { color: 'red' } : {})} activeClassName="is-active" to="/MyProfile" className="link-item">My Profile</NavLink>
      </nav>
    </header>
    {children}
  </main>
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
