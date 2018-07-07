import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

describe('expensesReducer (default state): ', () => {
  test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual([]);
  });
});

describe('expensesReducer (ADD_EXPENSE): ', () => {
  test('should add a new expense', () => {
    const expense = {
      id: '4',
      description: 'Groceries',
      note: '',
      amount: 500,
      createdAt: 0,
    };
    const action = {
      type: 'ADD_EXPENSE',
      expense,
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual([...expenses, expense]);
  });
});

describe('expensesReducer (REMOVE_EXPENSE - id found): ', () => {
  test('should remove an expense by id', () => {
    const action = {
      type: 'REMOVE_EXPENSE',
      id: expenses[1].id,
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[0], expenses[2]]);
  });
});

describe('expensesReducer (REMOVE_EXPENSE - id not found): ', () => {
  test('should not remove expenses if id not found', () => {
    const action = {
      type: 'REMOVE_EXPENSE',
      id: '-1',
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
  });
});

describe('expensesReducer (EDIT_EXPENSE - id found): ', () => {
  test('should edit an expense by id', () => {
    const amount = 250;
    const action = {
      type: 'EDIT_EXPENSE',
      id: expenses[1].id,
      updates: {
        amount,
      },
    };
    const state = expensesReducer(expenses, action);

    expect(state[1].amount).toBe(amount);
  });
});

describe('expensesReducer (EDIT_EXPENSE - id not found): ', () => {
  test('should not edit expenses if id not found', () => {
    const amount = 250;
    const action = {
      type: 'EDIT_EXPENSE',
      id: '-1',
      updates: {
        amount,
      },
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
  });
});

describe('expensesReducer (SET_EXPENSES): ', () => {
  test('should set expenses', () => {
    const action = {
      type: 'SET_EXPENSES',
      expenses: [expenses[1]],
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[1]]);
  });
});
