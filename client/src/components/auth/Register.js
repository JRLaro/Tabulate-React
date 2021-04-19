import React, { useState } from "react";

function Register() {
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
        console.log('Register Submit');
    }

  return (
    <div className="reg-container shadow p-3 mb-5 mt-5 bg-white rounded">
      <h1 className="text-center">
        Account <span className="text-primary">Register</span>
      </h1>
      <form>
        <div className="form-group">
          <label htmlFor="name"> <i class="fas fa-user"></i> Name</label>
          <input type="text" name="name" value={name} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email"> <i class="fas fa-envelope"></i> Email</label>
          <input type="email" name="email" value={email} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password"> <i class="fas fa-lock"></i> Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password2"> <i class="fas fa-check-circle"></i> Verify Password</label>
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
          />
              </div>
              <input type="submit" value='Register' className="btn btn-primary btn-block" />
      </form>
    </div>
  );
}

export default Register;
