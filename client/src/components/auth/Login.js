import React, { useState } from "react";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;

    const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
    
    const onSubmit = (e) => {
        e.preventDefault();
        console.log('Login Successful');
    }

  return (
    <div className="reg-container shadow p-3 mb-5 mt-5 bg-white rounded">
      <h1 className="text-center">
        Account <span className="text-danger">Login</span>
      </h1>
      <form>
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
              <input type="submit" value='Login' className="btn btn-primary btn-block" />
      </form>
    </div>
  );
}

export default Login;
