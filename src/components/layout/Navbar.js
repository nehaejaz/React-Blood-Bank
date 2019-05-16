import React from "react";
import { Link } from "react-router-dom";
import SignoutLinks from "./SignoutLinks";
import SigninLinks from "./SigninLinks";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            Blood Bank
          </Link>
          <SignoutLinks />
          <SigninLinks />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
