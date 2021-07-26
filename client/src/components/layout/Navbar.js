import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import NoteContext from "../../context/note/noteContext";
import logo from '../../images/tabulateLogo-01.png'

function Navbar({ title, icon }) {
  const authContext = useContext(AuthContext);
  const noteContext = useContext(NoteContext);
  const { isAuthenticated, logout, user } = authContext;
  const { clearNotes } = noteContext;

  const onLogout = () => {
    logout();
    clearNotes();
  };

  const navStyle = {
    color: '#899f70'
  }

  const authLinks = (
    <Fragment>
      <li>
        Welcome <strong>{user && user.name}</strong>
      </li>
      <li>
        <a href="#!" onClick={onLogout}>
          <i className="fas fa-sign-out-alt text-dark"></i>
          {/* <span className="text-dark"> Logout</span> */}
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment >
      <li>
        <Link to="/register" className='text-dark'> Register </Link>
      </li>
      <li>
        <Link to="/login" className='text-dark'> Login </Link>
      </li>
    </Fragment>
  );

  return (
    <Fragment >
      <div className="navbar">
        <h1>
          {/* <i className={icon} /> {title} */}
          <img src={logo} alt="logo" style={{width:'75px'}}/>
        </h1>
        <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
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
