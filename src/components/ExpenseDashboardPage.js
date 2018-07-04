import React from 'react';

import ConnectedExpenseList from './ExpenseList';
import ConnectedExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
  <div>
    <ConnectedExpenseList />
    <ConnectedExpenseListFilters />
  </div>
);

export default ExpenseDashboardPage;
