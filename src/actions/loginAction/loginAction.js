import axios from 'axios';
import { NotificationSuccess, NotificationFailure } from '../../utils/notifications';
import API_URL from '../../utils/constants';


const LoginAction = (data) => {
  const userData = {
    display_name: data.displayName,
    password: data.password,
  };

  return axios.post(`${API_URL}/v1/auth/login`, userData)
    .then((res) => {
      // console.log(res.data.msg)
      localStorage.setItem('access_token', res.data.Token);
      localStorage.setItem('name', data.displayName);
      NotificationSuccess(res.data.msg);
    }).catch((err) => {
      // console.log(err.response.data.error)
      NotificationFailure(err.response.data.error);
    });
};
export default LoginAction;
