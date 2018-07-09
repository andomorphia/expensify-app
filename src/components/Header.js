import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { startLogout } from '../actions/auth';

export const Header = ({ startLogoutProcess }) => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <button onClick={startLogoutProcess}>Logout</button>
  </header>
);

Header.propTypes = {
  startLogoutProcess: PropTypes.func,
};

Header.defaultProps = {
  startLogoutProcess: undefined,
};

const mapDispatchToProps = dispatch => ({
  startLogoutProcess: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);
