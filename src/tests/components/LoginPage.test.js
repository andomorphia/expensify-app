import React from 'react';
import { shallow } from 'enzyme';

import { LoginPage } from '../../components/LoginPage';

describe('LoginPage component rendering: ', () => {
  test('should render LoginPage correctly', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('LoginPage component (startLoginProcess): ', () => {
  test('should handle startLoginProcess', () => {
    const startLoginProcess = jest.fn();
    const wrapper = shallow(<LoginPage startLoginProcess={startLoginProcess} />);
    wrapper.find('button').simulate('click');
    expect(startLoginProcess).toHaveBeenCalled();
  });
});
