import moxios from 'moxios';
import SignupAction from './signupAction';
import API_URL from '../../utils/constants';

jest.mock('react-notify-toast');

describe('login action', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });
  const url = `${API_URL}/v1/auth/signup`;
  const userData = {
    display_name: 'dannie',
    email: 'd.kas@gmail.com',
    password: 'secret#1',
  };
  const data = {

    Token: 'dgsggyreiyfg678yu8ve7bbo8',
    msg: 'some message',

  };

  const mockLogin = (statusCode) => {
    test('should signup a user', () => {
      moxios.stubRequest(url, {
        status: statusCode,
        response: data,
      });

      return SignupAction(userData).then(() => {
        expect(data).toBe(data);
      });
    });
  };


  mockLogin(400);
});
