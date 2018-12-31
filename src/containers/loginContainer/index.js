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
  };

  handleSubmit = (event) => {
    event.preventDefault();
    LoginAction(this.state, this.props);
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
