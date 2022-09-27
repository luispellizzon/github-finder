import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";

const Navbar = ({ title }) => {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      {/* Links on the Left*/}
      <div className="container mx-auto text-white">
        <div className="flex-none px-2 mx-2">
          <Link to="/" className="text-lg font-bold align-middle">
            <FaGithub className="inline pr-2 text-3xl " />
            {title}
          </Link>
        </div>
        {/* Links on the Right*/}
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "QuickHub Finder",
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
