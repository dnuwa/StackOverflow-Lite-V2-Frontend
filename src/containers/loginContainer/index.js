import React, { Component } from 'react';
import LoginAction from '../../actions/loginAction/loginAction';

import Login from '../../components/Login';

export class LoginContainer extends Component {
  state = {
    displayName: '',
    password: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
    // console.log(this.state);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state);
    LoginAction(this.state);
  };

  render() {
    return (
      <Login
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default LoginContainer;
