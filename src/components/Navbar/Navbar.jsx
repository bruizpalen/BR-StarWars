import React from "react";
import { Link } from "react-router-dom";
import starWarsLogo from "../../assets/star-wars-logo-png-transparent.png";
import classes from "./Navbar.module.css";
import Dropdown from "./components/Dropdown";

const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/">
          <img
            src={starWarsLogo}
            alt="Star Wars Logo"
            className={classes.logo}
          />
        </Link>
        <Dropdown className="ms-auto"></Dropdown>
      </div>
    </nav>
  );
};

export default Navbar;
