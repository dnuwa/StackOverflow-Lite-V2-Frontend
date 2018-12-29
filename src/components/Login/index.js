import React from 'react';
import * as PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Login = ({ handleChange, handleSubmit }) => (
  <div className="container">
    <div className="heading">Welcome to StackOverflow-lite</div>
    <div className="sec-heading"> Log in below to continue.</div>
    <div className="form-body">
      <form onSubmit={handleSubmit} id="signin">
        <label htmlFor="displayName">
        Display name
          <input
            type="text"
            id="displayName"
            placeholder="Your dispaly name.."
            required
            onChange={handleChange}
          />

        </label>

        <label htmlFor="userpassword">
        Password
          <input
            type="password"
            id="password"
            placeholder="********"
            required
            onChange={handleChange}
          />
        </label>

        <input type="submit" value="Log In" />
      </form>
      <div>
        Don&apos;t have an account?

        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  </div>
);
Login.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
export default Login;
