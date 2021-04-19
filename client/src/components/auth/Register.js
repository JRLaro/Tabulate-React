import React, { useState, useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

function Register() {
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setAlert("Please enter all fields", "danger");
    } else if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      console.log("Register Successful");
    }
  };

  return (
    <div className="reg-container shadow p-3 mb-5 mt-5 bg-white rounded">
      <h1 className="text-center">
        Account <span className="text-primary">Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            {" "}
            <i class="fas fa-user"></i> Name
          </label>
          <input type="text" name="name" value={name} onChange={onChange} required/>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            {" "}
            <i class="fas fa-envelope"></i> Email
          </label>
          <input type="email" name="email" value={email} onChange={onChange} required/>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            {" "}
            <i class="fas fa-lock"></i> Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
            minLength='6'
          />
        </div>
        <div className="form-group">
          <label htmlFor="password2">
            {" "}
            <i class="fas fa-check-circle"></i> Verify Password
          </label>
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
            required
            minLength='6'
          />
        </div>
        <input
          type="submit"
          value="Register"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
}

export default Register;
