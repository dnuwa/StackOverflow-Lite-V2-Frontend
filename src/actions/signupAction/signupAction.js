import axios from 'axios';
import { NotificationSuccess, NotificationFailure } from '../../utils/notifications';
import API_URL from '../../utils/constants';

const SignupAction = (data, obj) => {
  const userData = {
    display_name: data.dname,
    email: data.email,
    password: data.password,
  };

  return axios.post(`${API_URL}/v1/auth/signup`, userData)
    .then((res) => {
      // console.log(res.data.msg)
      NotificationSuccess(res.data.msg);
      obj.history.push('/login');
    }).catch((err) => {
      // console.log(err.response.data.msg)
      NotificationFailure(err.response.data.msg);
    });
};
export default SignupAction;
