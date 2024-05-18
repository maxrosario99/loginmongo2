import React from "react";
import { HelloTest, LoginUser } from "./api/user";

const Login = () => {
  const handleLogin = async (e: any) => {
    e.preventDefault();
    // const response = await LoginUser({ username: "maxr", password: 12345 });

    try {
      const response = await LoginUser({ username: "maxr", password: 12345 });

      console.log(response);
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2>Login </h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="name">Username</label>
          <input
            type="text"
            id="name"
            name="username"
            placeholder="Enter your username"
            required
            autoComplete="off"
          />

          <label htmlFor="name">Password</label>
          <input
            type="text"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Login
        </button>
        <p>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
