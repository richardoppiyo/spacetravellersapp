import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <Header>
    <nav>
      <ul>
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
  </Header>
);

export default Header;
