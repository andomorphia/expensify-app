import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { startLogout } from '../actions/auth';

export const Header = ({ startLogoutProcess }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Expensify</h1>
        </Link>
        <button className="button button--link" onClick={startLogoutProcess}>Logout</button>
      </div>
    </div>
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
