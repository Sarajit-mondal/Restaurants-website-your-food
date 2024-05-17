import { NavLink } from "react-router-dom";

import notification from "../../assets/icon/cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png";
import profileImg from "../../assets/profile.png";
function Navbar() {
  const navPages = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/contactUs">Contact Us</NavLink>
      </li>
      <li>
        <NavLink to="/dashbord">DashBoard</NavLink>
      </li>
      <li>
        <NavLink to="/ourmenu">Our Menu</NavLink>
      </li>
      <li>
        <NavLink to="/ourshop">Our Shop</NavLink>
      </li>
    </>
  );

  //   navpage two
  const navPagesTwo = (
    <div className="font-bold  space-x-5 ">
      <NavLink to="/">Home</NavLink>

      <NavLink to="/contactUs">Contact Us</NavLink>

      <NavLink to="/dashbord">DashBoard</NavLink>

      <NavLink to="/ourmenu">Our Menu</NavLink>

      <NavLink to="/ourshop">Our Shop</NavLink>
    </div>
  );
  return (
    <div className="max-w-6xl mx-auto w-11/12">
      <div className="navbar p-5 bg-opacity-color text-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
            >
              {navPages}
            </ul>
          </div>
          <a className="text-xl">
            <span className="text-3xl font-bold">Your Food</span>
            <br />
            <p className="tracking-[5px]">Restaurent</p>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu  menu-horizontal px-1">{navPagesTwo}</ul>
        </div>
        <div className="navbar-end gap-3">
          <img src={notification} className="w-12" alt="" />
          <a className="btn">Log In</a>
          <a className="btn">Sign Out</a>
          <img src={profileImg} className="size-10" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;