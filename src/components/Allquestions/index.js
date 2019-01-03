import React from 'react';
import * as PropTypes from 'prop-types';

const AllQuestions = ({ qn }) => (
  <div className="questions-div">
    <div className="allQuestions">
      <p>{qn.question}</p>
      <footer className="blockquote-footer">
        <cite title="Source Title">Source Title</cite>
      </footer>
    </div>
  </div>
);

AllQuestions.propTypes = {
  qn: PropTypes.shape({
    id: PropTypes.isRequired,
  }).isRequired,
};

export default AllQuestions;
