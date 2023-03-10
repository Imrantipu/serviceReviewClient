import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from './../../../context/AuthProvider';

const Header = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  const menuItems = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/services">Our Services</Link></li>
      <li><Link to="/about">About Us</Link></li>
      <li><Link to="/blog">Blog</Link></li>
      {user?.email ? (
        <>
          <li><Link to="/review">My Reviews</Link></li>
          <li><Link to="/addservice">Add Service</Link></li>
          <li className="font-semibold"><button onClick={handleLogOut} className="btn-ghost">Log out</button></li>
        </>
      ) : (
        <>
         <li><Link to="/login">Login</Link></li>
         <li><Link to="/signup">Sign Up</Link></li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-200 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52"
          >
                {menuItems}
              
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-2xl">
            Emigration hook
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {menuItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
