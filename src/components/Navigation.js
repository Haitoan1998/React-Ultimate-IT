import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <div class="topnav">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to="/weather">weather</NavLink>
        <NavLink to={"/product"}>product</NavLink>{" "}
        <NavLink to={"/otp"}>OTP</NavLink>
        <NavLink to={"/about"}>ABOUT</NavLink>
      </div>
    </div>
  );
}
