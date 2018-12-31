import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Questions from '../../components/Questions';
import QuestionAction from '../../actions/questionAction/createqn';

class QuestionContainer extends Component {
  state = {
    question: '',
    questions: [],
  };

  handleText = (event) => {
    this.setState({ [event.target.id]: event.target.value });
    // console.log(this.state);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state);
    QuestionAction(this.state, this.props);
  };

  render() {
    return (
      <div className="content-wrapper">
        <Questions
          handleText={this.handleText}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default QuestionContainer;
