import React from 'react';
import { shallow } from 'enzyme';

import { ExpensesSummary } from '../../components/ExpensesSummary';

describe('ExpensesSummary component rendering (one expense): ', () => {
  test('should correctly render ExpensesSummary with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={250} />);

    expect(wrapper).toMatchSnapshot();
  });
});

describe('ExpensesSummary component rendering (multiple expenses): ', () => {
  test('should correctly render ExpensesSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={20} expensesTotal={550375} />);

    expect(wrapper).toMatchSnapshot();
  });
});
