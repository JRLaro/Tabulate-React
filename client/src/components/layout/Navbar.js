import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

function Navbar({ title, icon }) {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => {
    logout();
  }

  const authLinks = (
    <Fragment>
      <li>Welcome <strong>{user && user.name}</strong> </li>
      <li>
        <a href="#!" onClick={onLogout}>
          <i className="fas fa-sign-out-alt"></i>
          <span className="hide-sm"> Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/register"> Register </Link>
      </li>
      <li>
        <Link to="/login"> Login </Link>
      </li>
    </Fragment>
  );

  return (
    <Fragment>
      <div className="navbar bg-primary">
        <h1>
          <i className={icon} /> {title}
        </h1>
        <ul>
          {isAuthenticated ? authLinks : guestLinks}
        </ul>
      </div>
    </Fragment>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Tabulate",
  icon: "far fa-sticky-note",
};

export default Navbar;
