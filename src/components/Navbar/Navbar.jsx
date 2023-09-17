import React from "react";
import { Link } from "react-router-dom";
import starWarsLogo from "../../assets/star-wars-logo.png";
import classes from "./Navbar.module.css";
import Dropdown from "./components/Dropdown";
// import ThemeButton from "./components/ThemeButton";

const Navbar = () => {
  return (
    <nav className="navbar bg-dark-subtle">
      <div className="container-fluid w-100 mx-0 me-0">
        <Link to="/">
          <img
            src={starWarsLogo}
            alt="Star Wars Logo"
            className={`${classes.logo} mx-3 my-0`}
          />
        </Link>
        {/* <ThemeButton /> */}
        <Dropdown className={`${classes.favorites} ms-5`}></Dropdown>
      </div>
    </nav>
  );
};

export default Navbar;
