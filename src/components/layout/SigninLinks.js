import React from "react";
import { NavLink } from "react-router-dom";
import Notifications from "../dashboard/Notifications";
const SigninLinks = () => {
  return (
    <div>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
          <NavLink to="/beDonor">Donate Blood</NavLink>
        </li>
        <li>
          <Notifications />
        </li>
        <li>
          <NavLink to="/">Logout</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SigninLinks;
