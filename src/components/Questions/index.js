import React from 'react';
import * as PropTypes from 'prop-types';

const Questions = ({ handleText, handleSubmit }) => (
  <div className="questions-div">
    <form onSubmit={handleSubmit} id="addquestion">
      <input
        type="text"
        id="question"
        name="question"
        placeholder="Ask your question ..."
        required
        onChange={handleText}
      />
      <button type="submit">Post Question</button>
    </form>
  </div>
);
Questions.propTypes = {
  handleText: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Questions;
