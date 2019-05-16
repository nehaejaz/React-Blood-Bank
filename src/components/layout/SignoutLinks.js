import React from "react";
import { NavLink } from "react-router-dom";

const SignoutLinks = () => {
  return (
    <div className="SignoutLinks">
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <NavLink to="/signin">SignIn</NavLink>
        </li>
        <li>
          <NavLink to="/signup">SignUp</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SignoutLinks;
