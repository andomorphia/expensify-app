import React from 'react';
import { shallow } from 'enzyme';

import NotFoundPage from '../../components/NotFoundPage';

describe('NotFoundPage component rendering: ', () => {
  test('should render NotFoundPage correctly', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
