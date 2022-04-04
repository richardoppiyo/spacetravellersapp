import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ children }) => (
  <main>
    <header className="d-flex">
      <nav>
        <ul className="links">
          <li>
            <NavLink to="/">Rockets</NavLink>
          </li>
          <li>
            <NavLink to="/Missions">Missions</NavLink>
          </li>
          <li>
            <NavLink to="/MyProfile">My Profile</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    {children}
  </main>
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
