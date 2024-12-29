import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const methods = [100, 101, 102, 103];

  return (
    <div className="navbar">
      {methods.map((method) => (
        <Link key={method} to={`/${method}`} className="navbar-link">
          {method}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
