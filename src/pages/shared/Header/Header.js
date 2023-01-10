import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-200">
  <div className="flex-1">
    <Link to ="/" className="btn btn-ghost normal-case text-xl">Emigration hook</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link to = "/">Home</Link></li>
    </ul>
  </div>
</div>
    </div>
  );
};

export default Header;
