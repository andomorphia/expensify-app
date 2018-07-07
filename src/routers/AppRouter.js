import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import ConnectedLoginPage from '../components/LoginPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import ConnectedAddExpensePage from '../components/AddExpensePage';
import ConnectedEditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import ConnectedPrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route exact path="/" component={ConnectedLoginPage} />
        <ConnectedPrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <ConnectedPrivateRoute path="/create" component={ConnectedAddExpensePage} />
        <ConnectedPrivateRoute path="/edit/:id" component={ConnectedEditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
