import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import ConnectedHeader from '../components/Header';

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props => (
      isAuthenticated ? (
        <Fragment>
          <ConnectedHeader />
          <Component {...props} />
        </Fragment>
      ) : (
        <Redirect to="/" />
      )
    )}
  />
);

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.any,
};

PrivateRoute.defaultProps = {
  component: undefined,
};

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid,
});

export default connect(mapStateToProps)(PrivateRoute);
