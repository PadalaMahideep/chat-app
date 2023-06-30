import React from 'react';
import './styles/main.scss';
import 'rsuite/dist/styles/rsuite-default.css';
import { Switch, Route } from 'react-router';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import PrivateRoute from './components/PrivateRoute';
function App() {
  return (
    <Switch>
      <Route path="/signin">
        <SignIn />
      </Route>
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    </Switch>
  );
}

export default App;
