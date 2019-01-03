import axios from 'axios';
import ACTION_TYPE from '../actionTypes';
import API_URL from '../../utils/constants';

export const fetchQuestionsSuccess = questions => ({
  type: ACTION_TYPE.FETCH_QUESTIONS_SUCCESS,
  questions,
});

export const fetchQuestionsFailure = errorMessage => ({
  type: ACTION_TYPE.FETCH_QUESTIONS_FAILURE,
  errorMessage,
});

const Header = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    Accept: 'application/json, text/plain, */*',
    'Content-type': 'application/json',
  },
};

export const fetchQuestionsThunk = () => dispatch => axios.get(`${API_URL}/v1/questions`, Header)
  .then((response) => {
    dispatch(fetchQuestionsSuccess(response.data));
  })
  .catch(() => {
    dispatch(fetchQuestionsFailure('Check your internet conectivity'));
  });

export default fetchQuestionsThunk;
