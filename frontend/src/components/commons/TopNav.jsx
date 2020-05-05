import React from "react";
import { NavLink } from "react-router-dom";

export default function TopNav() {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <a href="index.html" className="logo">
          <span>
            <span>DASHBOARD</span>
          </span>
          <i>
            Home
          </i>
        </a>
      </div>
      <nav className="navbar-custom">
        <ul className="navbar-right list-inline float-right mb-0">
          <li className="dropdown notification-list list-inline-item">
            <div className="dropdown notification-list nav-pro-img">
              <NavLink className="dropdown-item text-danger" to="/">
                  <i className="mdi mdi-power text-danger"></i> Logout
                </NavLink>
              
            </div>
          </li>
        </ul>
        <ul className="list-inline menu-left mb-0">
          <li className="float-left">
            <button className="button-menu-mobile open-left waves-effect">
              <i className="mdi mdi-menu"></i>
            </button>
          </li>
          
        </ul>
      </nav>
    </div>
  );
}
