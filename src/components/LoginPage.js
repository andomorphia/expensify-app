import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLoginProcess }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <p>It's time to get your expenses under control.</p>
      <button className="button" onClick={startLoginProcess}>Login with Google</button>
    </div>
  </div>
);

LoginPage.propTypes = {
  startLoginProcess: PropTypes.func,
};

LoginPage.defaultProps = {
  startLoginProcess: undefined,
};

const mapDispatchToProps = dispatch => ({
  startLoginProcess: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
