import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

export default function Navigator({ routes }) {
  return (
    <nav className="navbar">
      <input type="checkbox" className="toggler" id="checkbox" />
      <div className="burger">
        <div className="line" />
      </div>
      <div className="logo">Gome Bar</div>
      <ul className="menus">
        <li>
          <NavLink exact to="/" activeClassName="active" className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/algo" activeClassName="active" className="nav-link">
            Algo
          </NavLink>
        </li>
        <li>
          <NavLink to="/basic" activeClassName="active" className="nav-link">
            Basic Example
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/protected_profile"
            activeClassName="active"
            className="nav-link"
          >
            Protected Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="active" className="nav-link">
            Log In
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active" className="nav-link">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" activeClassName="active" className="nav-link">
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
