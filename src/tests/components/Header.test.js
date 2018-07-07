import React from 'react';
import { shallow } from 'enzyme';

import { Header } from '../../components/Header';

describe('Header component rendering: ', () => {
  test('should render Header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Header component (startLogoutProcess): ', () => {
  test('should handle startLogoutProcess', () => {
    const startLogoutProcess = jest.fn();
    const wrapper = shallow(<Header startLogoutProcess={startLogoutProcess} />);
    wrapper.find('button').simulate('click');
    expect(startLogoutProcess).toHaveBeenCalled();
  });
});
