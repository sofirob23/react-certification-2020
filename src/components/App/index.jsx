import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Favorites from '../../pages/Favorites';
import HomePage from '../../pages/Home';
import VideoView from '../../pages/VideoView';
import PrivateRoute from '../PrivateRoute';
import NavBar from '../NavBar';
import NoResults from '../NotFound/NoResults';
import { StateProvider } from '../../state/store';

function App() {
  return (
    <StateProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <PrivateRoute exact path="/favorites" component={Favorites} />
          <Route path="/video/:videoID" render={(props) => <VideoView {...props} />} />
          <PrivateRoute path="/favorites/:videoID" component={VideoView} />
          <Route path="*">
            <NoResults />
          </Route>
        </Switch>
      </BrowserRouter>
    </StateProvider>
  );
}

export default App;
