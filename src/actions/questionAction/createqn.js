import axios from 'axios';
import { NotificationSuccess, NotificationFailure } from '../../utils/notifications';
// import GetQuestions from '../../actions/questionAction/getqnsAction';
import API_URL from '../../utils/constants';

const Header = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    Accept: 'application/json, text/plain, */*',
    'Content-type': 'application/json',
  },
};

const CreateQuestion = (data) => {
  const askedqn = {
    question: data.question,
  };

  return axios.post(`${API_URL}/v1/questions`,
    askedqn, Header).then((res) => {
    NotificationSuccess(res.data.msg);
    // obj.dispatch(GetQuestions());
  }).catch((err) => {
    NotificationFailure(err.response.data.msg);
  });
};

export default CreateQuestion;
