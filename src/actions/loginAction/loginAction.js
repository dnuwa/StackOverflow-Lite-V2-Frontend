import axios from 'axios';
import { NotificationSuccess, NotificationFailure } from '../../utils/notifications';
import API_URL from '../../utils/constants';


const LoginAction = (data, obj) => {
  const userData = {
    display_name: data.displayName,
    password: data.password,
  };

  return axios.post(`${API_URL}/v1/auth/login`, userData)
    .then((res) => {
      localStorage.setItem('access_token', res.data.Token);
      localStorage.setItem('name', data.displayName);
      NotificationSuccess(res.data.msg);
      obj.history.push('/questions');
    }).catch(() => {
    //   console.log(err.response.data.error);
      NotificationFailure('Could not find user with Your Display Name and Password');
    });
};
export default LoginAction;
