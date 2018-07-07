import {
  login,
  logout,
} from '../../actions/auth';

describe('login: ', () => {
  test('should generate login action object', () => {
    const uid = '123abc';
    const action = login(uid);

    expect(action).toEqual({
      type: 'LOGIN',
      uid,
    });
  });
});

describe('logout: ', () => {
  test('should generate logout action object', () => {
    const action = logout();

    expect(action).toEqual({
      type: 'LOGOUT',
    });
  });
});
