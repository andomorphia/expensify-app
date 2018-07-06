import React from 'react';
import { shallow } from 'enzyme';

import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let startAddExpense;
let history;
let wrapper;

// Code to run before each test
beforeEach(() => {
  startAddExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />);
});

describe('AddExpensePage component rendering: ', () => {
  test('should render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('AddExpensePage component (onSubmit): ', () => {
  test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1]);
  });
});
