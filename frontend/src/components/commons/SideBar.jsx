import React from "react";
import "../../index.css";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="left side-menu">
      <div className="slimscroll-menu" id="remove-scroll">
        <div id="sidebar-menu">
          <ul className="metismenu" id="side-menu">
            <li className="menu-title">Main</li>
            <li>
              <a href="index.html" className="waves-effect">
                <i className="ti-home"></i>
                <span className="badge badge-primary badge-pill float-right">
                  2
                </span>
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <NavLink to="#" className="waves-effect">
                <i className="ti-calendar"></i>
                <span>Item1</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="clearfix"></div>
      </div>
    </div>
  );
}
