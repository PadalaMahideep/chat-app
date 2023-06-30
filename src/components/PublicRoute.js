import React from 'react';
import { Route, Redirect } from 'react-router';

const PublicRoute = ({ children, ...Routeprops }) => {
  const profile = false;

  if (profile) {
    return <Redirect to="/" />;
  }
  return <Route {...Routeprops}>{children}</Route>;
};

export default PublicRoute;
