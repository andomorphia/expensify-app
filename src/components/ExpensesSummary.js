import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import numeral from 'numeral';

import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedExpenseCount = numeral(expenseCount).format('0,0');
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');

  return (
    <h2>Viewing {formattedExpenseCount} {expenseWord} totalling {formattedExpensesTotal}</h2>
  );
};

ExpensesSummary.propTypes = {
  expenseCount: PropTypes.number,
  expensesTotal: PropTypes.number,
};

ExpensesSummary.defaultProps = {
  expenseCount: undefined,
  expensesTotal: undefined,
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
