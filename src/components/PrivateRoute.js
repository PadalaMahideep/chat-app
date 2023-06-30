import React from 'react';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({ children, ...Routeprops }) => {
  const profile = false;

  if (!profile) {
    return <Redirect to="/signin" />;
  }

  return <Route {...Routeprops}>{children}</Route>;
};

export default PrivateRoute;
