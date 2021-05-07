import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { store } from '../../state/store';

function PrivateRoute({ component: Component, ...rest }) {
  const globalState = useContext(store);
  const authenticated = globalState.state.loggedUser !== null;

  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? <Component {...props} favorites /> : <Redirect to="/" />
      }
    />
  );
}

export default PrivateRoute;
