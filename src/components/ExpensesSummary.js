import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedExpenseCount = numeral(expenseCount).format('0,0');
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          { /* eslint-disable max-len */ }
          Viewing <span>{formattedExpenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span>
          { /* eslin-enable */}
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
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
