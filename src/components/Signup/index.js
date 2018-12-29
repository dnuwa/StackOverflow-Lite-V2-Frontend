import React from 'react';
import { Link } from 'react-router-dom';
import * as PropTypes from 'prop-types';

const SignUp = ({ handleChange, handleSubmit }) => (
  <div className="container">
    <div className="heading">Create your StackOverflow-lite account.</div>
    <div className="sec-heading"> It&apos;s free and only takes a minute</div>
    <div className="form-body">
      <form onSubmit={handleSubmit} id="signup">
        <label htmlFor="dname">
        Dispaly Name
          <input
            type="text"
            id="dname"
            placeholder="Your dispaly name.."
            required
            onChange={handleChange}
          />
        </label>

        <label htmlFor="email">
        Email
          <input
            type="email"
            id="email"
            placeholder="Your email.."
            required
            onChange={handleChange}
          />
        </label>

        <label htmlFor="password">
        Password
          <input
            type="password"
            id="password"
            placeholder="********"
            required
            onChange={handleChange}
          />
        </label>

        <input type="submit" value="Sign Up" />
      </form>
      <div>
        Already have an account?
        {' '}
        <Link to="/login">Log In</Link>
      </div>
    </div>
  </div>
);
SignUp.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SignUp;
