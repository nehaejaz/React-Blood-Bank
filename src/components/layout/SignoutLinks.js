import React from "react";
import { NavLink } from "react-router-dom";

const SignoutLinks = () => {
  return (
    <div className="SignoutLinks">
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
          <NavLink to="/signin">SignIn</NavLink>
        </li>
        <li>
          <NavLink to="">SignUp</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SignoutLinks;
