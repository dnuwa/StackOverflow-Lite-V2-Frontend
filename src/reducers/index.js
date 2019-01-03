import { combineReducers } from 'redux';
import questionsReducer from './allquestionsReducer';

const reducer = combineReducers({
  questionsReducer,
});

export default reducer;
