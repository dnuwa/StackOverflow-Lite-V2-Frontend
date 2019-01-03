import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchQuestionsThunk from '../../actions/questionAction/getallqnsAction';
import AllQuestions from '../../components/Allquestions';

export class Questions extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(fetchQuestionsThunk());
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        {data.questions
          ? (
            <div className="questions">
              {
                  data.questions.map(question => (
                    <AllQuestions qn={question} key={question.qn_id} />
                  ))
              }
            </div>
          )
          : <span>Loading....</span>
        }
      </div>
    );
  }
}

Questions.propTypes = {
  data: PropTypes.shape({
    questions: PropTypes.array,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};
export const mapStateToProps = state => ({ data: state.questionsReducer });
export default connect(mapStateToProps)(Questions);
