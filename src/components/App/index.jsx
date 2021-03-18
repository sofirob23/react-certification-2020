import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import NavBar from '../NavBar';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
