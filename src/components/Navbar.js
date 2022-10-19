import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <Link to="/" className="btn btn-success navbar-btn m-2 ">
            HOME
          </Link>
          <Link to="/showAll" className="btn btn-success navbar-btn m-2">
            SHOW ALL
          </Link>
          <Link to="/add" className="btn btn-success navbar-btn m-2">
            ADD EMP
          </Link>
        </div>

        <hr style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default Navbar;
