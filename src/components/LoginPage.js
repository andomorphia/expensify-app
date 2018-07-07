import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLoginProcess }) => (
  <button onClick={startLoginProcess}>Login</button>
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
