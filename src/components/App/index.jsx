import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../../pages/Home';
import VideoView from '../../pages/VideoView';
import NavBar from '../NavBar';
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
          <Route path="/video/:videoID" render={(props) => <VideoView {...props} />} />
        </Switch>
      </BrowserRouter>
    </StateProvider>
  );
}

export default App;
