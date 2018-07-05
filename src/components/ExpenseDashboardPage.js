import React from 'react';

import ConnectedExpensesSummary from './ExpensesSummary';
import ConnectedExpenseListFilters from './ExpenseListFilters';
import ConnectedExpenseList from './ExpenseList';

const ExpenseDashboardPage = () => (
  <div>
    <ConnectedExpensesSummary />
    <ConnectedExpenseListFilters />
    <ConnectedExpenseList />
  </div>
);

export default ExpenseDashboardPage;
