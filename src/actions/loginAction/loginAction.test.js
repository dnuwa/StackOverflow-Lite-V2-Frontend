import moxios from 'moxios';
import LoginAction from './loginAction';
import API_URL from '../../utils/constants';

jest.mock('react-notify-toast');

describe('login action', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });
  const url = `${API_URL}/v1/auth/login`;
  const userData = {
    display_name: 'dannie',
    password: 'secret#1',
  };
  const data = {

    Token: 'dgsggyreiyfg678yu8ve7bbo8',
    msg: 'some message',

  };

  const mockLogin = (statusCode) => {
    test('should login user', () => {
      moxios.stubRequest(url, {
        status: statusCode,
        response: data,
      });

      return LoginAction(userData).then(() => {
        expect(data).toBe(data);
      });
    });
  };

  mockLogin(200);
});
