import React from "react";
import logo from "../../../assets/logo.png";
import CustomLink from "./CustomLink";
const Menubar = () => {
  const menu = (
    <>
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/services">Services</CustomLink>
      <CustomLink to="/login">Login</CustomLink>
    </>
  );
  return (
    <div className="w-full lg:w-[90%] mx-auto navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 bg-blue-900"
          >
            {menu}
          </ul>
        </div>
        <img className="w-36" src={logo} alt="logo" />
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal bg-blue-900 p-0">{menu}</ul>
      </div>
    </div>
  );
};

export default Menubar;
