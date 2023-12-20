import React, { useState } from 'react';
import useAuthentication from '../../hooks/auth/authentication';
import { Navigate } from 'react-router-dom';

const LoginForm = () => {
  const { user, loginUser, errors } = useAuthentication();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginUser(username, password);
  };

  if(user){
    return <Navigate to="/dashboard"/>
  }

  return (
    <form className="p-5 m-5" onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div className="form-group mt-2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="form-control"
          placeholder="Enter your email"
          autoComplete="on"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="form-control"
          placeholder="Enter your password"
          autoComplete="on"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <div className="d-flex flex-row form-group mt-2 gap-3">
        <button type="submit" id="submit" className="btn btn-primary mr-4">
          Login
        </button>
        <label>
          Don't have an account? - <a href="/signup">Sign up</a>
        </label>
      </div>
    </form>
  );
};

export default LoginForm;
