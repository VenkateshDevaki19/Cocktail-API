import React from "react";
import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/Navbar";

const NavBar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <span className="logo">Cocktail</span>
        <div className="nav-links">
          <NavLink to="/" className="HomePage-link">
            Home
          </NavLink>
          <NavLink to="/about" className="AboutPage-link">
            About
          </NavLink>
          <NavLink to="/newsLetter" className="newsLetterPage-link">
            NewsLetter
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

export default NavBar;
