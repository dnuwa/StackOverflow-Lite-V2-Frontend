import React, { Component } from 'react';
import SignUp from '../../components/Signup';
import SignupAction from '../../actions/signupAction/signupAction';

class SiginUpContainer extends Component {
  state = {
    dname: '',
    email: '',
    password: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
    // console.log(this.state);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state);
    SignupAction(this.state, this.props);
    // console.log(this.props.history.push('/login'));
  };

  render() {
    return (
      <SignUp
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default SiginUpContainer;
