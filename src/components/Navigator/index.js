import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigator() {
  return (
    <nav className="navbar">
      <input type="checkbox" className="toggler" id="checkbox" />
      <div className="burger">
        <div className="line"></div>
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
          <NavLink to="/about" activeClassName="active" className="nav-link">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active" className="nav-link">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
