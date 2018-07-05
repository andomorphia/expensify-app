import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

describe('selectExpensesTotal (no expenses): ', () => {
  test('should return 0 if no expenses', () => {
    const noExpenses = [];
    const result = selectExpensesTotal(noExpenses);

    expect(result).toBe(0);
  });
});

describe('selectExpensesTotal (no expenses): ', () => {
  test('should correctly add up a single expense', () => {
    const singleExpense = [expenses[1]];
    const result = selectExpensesTotal(singleExpense);

    expect(result).toBe(109500);
  });
});

describe('selectExpensesTotal (no expenses): ', () => {
  test('should correctly add up multiple expenses', () => {
    const result = selectExpensesTotal(expenses);

    expect(result).toBe(114195);
  });
});
