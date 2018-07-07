import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  startAddExpense,
  addExpense,
  editExpense,
  startEditExpense,
  removeExpense,
  startRemoveExpense,
  setExpenses,
  startSetExpenses,
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({
    id,
    description,
    note,
    amount,
    createdAt,
  }) => {
    expensesData[id] = {
      description,
      note,
      amount,
      createdAt,
    };
  });

  database.ref('expenses').set(expensesData).then(() => done());
});

describe('addExpense (provided values): ', () => {
  test('should setup add expense action object with provided values', () => {
    const action = addExpense(expenses[2]);

    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: expenses[2],
    });
  });
});

describe('startAddExpense (provided values): ', () => {
  test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
      description: 'Mouse',
      amount: 3000,
      note: 'This one is better',
      createdAt: 1000,
    };

    store.dispatch(startAddExpense(expenseData))
      .then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual({
          type: 'ADD_EXPENSE',
          expense: {
            id: expect.any(String),
            ...expenseData,
          },
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
      })
      // Chaining promises
      .then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        // Tells Jest this is an asynchronous test
        done();
      });
  });
});

describe('startAddExpense (default values): ', () => {
  test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({});
    const expenseDefaults = {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
    };

    store.dispatch(startAddExpense({}))
      .then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual({
          type: 'ADD_EXPENSE',
          expense: {
            id: expect.any(String),
            ...expenseDefaults,
          },
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
      })
      // Chaining promises
      .then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults);
        // Tells Jest this is an asynchronous test
        done();
      });
  });
});

describe('editExpense: ', () => {
  test('should setup edit expense action object', () => {
    const action = editExpense('123abc', { note: 'New note value' });

    expect(action).toEqual({
      type: 'EDIT_EXPENSE',
      id: '123abc',
      updates: {
        note: 'New note value',
      },
    });
  });
});

describe('startEditExpense: ', () => {
  test('should edit expense from firebase', (done) => {
    const store = createMockStore({});
    const { id } = expenses[0];
    const updates = {
      amount: 21045,
    };

    store.dispatch(startEditExpense(id, updates))
      .then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual({
          type: 'EDIT_EXPENSE',
          id,
          updates,
        });

        return database.ref(`expenses/${id}`).once('value');
      })
      // Chaining promises
      .then((snapshot) => {
        expect(snapshot.val().amount).toEqual(updates.amount);
        // Tells Jest this is an asynchronous test
        done();
      });
  });
});

describe('removeExpense: ', () => {
  test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });

    expect(action).toEqual({
      type: 'REMOVE_EXPENSE',
      id: '123abc',
    });
  });
});

describe('startRemoveExpense: ', () => {
  test('should remove expense from firebase', (done) => {
    const store = createMockStore({});
    const { id } = expenses[2];

    store.dispatch(startRemoveExpense({ id }))
      .then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual({
          type: 'REMOVE_EXPENSE',
          id,
        });

        return database.ref(`expenses/${id}`).once('value');
      })
      // Chaining promises
      .then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        // Tells Jest this is an asynchronous test
        done();
      });
  });
});

describe('setExpense: ', () => {
  test('should setup set expense action object with data', () => {
    const action = setExpenses(expenses);

    expect(action).toEqual({
      type: 'SET_EXPENSES',
      expenses,
    });
  });
});

describe('startSetExpenses: ', () => {
  test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore({});

    store.dispatch(startSetExpenses())
      .then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual({
          type: 'SET_EXPENSES',
          expenses,
        });
        done();
      });
  });
});
