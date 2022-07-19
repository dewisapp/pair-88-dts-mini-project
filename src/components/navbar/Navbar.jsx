import React from "react";
import "./navbar.css";
import logo from "../../images/logo.png";
import {
  ArrowDropDown,
  Notifications,
  SearchOutlined,
} from "@mui/icons-material";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <img className="navbar-logo logo" src={logo} />
          <span className="navbar-menu">Home</span>
          <span className="navbar-menu">Series</span>
          <span className="navbar-menu">Movies</span>
          <span className="navbar-menu">New and Popular</span>
          <span className="navbar-menu">My List</span>
        </div>
        <div className="navbar-right">
          <SearchOutlined className="navbar-icon" />
          <span className="navbar-icon">user</span>
          <Notifications className="navbar-icon" />
          <img className="navbar-logo" src={logo} />
          <div className="profile">
            <ArrowDropDown className="navbar-icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
