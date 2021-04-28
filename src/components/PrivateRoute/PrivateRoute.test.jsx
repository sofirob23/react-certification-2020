import React from 'react';
import { Router, MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { createMemoryHistory } from 'history';
import mockUser from '../../utils/mocks/logged-user-mock.json';
import { store } from '../../state/store';
import PrivateRoute from './index';

describe('Private Route tests', () => {
  const { Provider } = store;
  const dispatch = jest.fn();
  let state = {
    videoList: [],
    darkMode: false,
    currentVideo: {},
    currentVideoProfile: {},
    loggedUser: mockUser,
  };

  test('should render component if user has been authenticated', () => {
    const AComponent = () => (
      <div>
        <h1>AComponent</h1>
      </div>
    );

    render(
      <Provider value={{ dispatch, state }}>
        <MemoryRouter initialEntries={['/favorites']}>
          <PrivateRoute path="/favorites" component={AComponent} />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  test('should redirect to Home if user is null', () => {
    const history = createMemoryHistory();
    const AComponent = () => (
      <div>
        <h1>AComponent</h1>
      </div>
    );
    state = {
      videoList: [],
      darkMode: false,
      currentVideo: {},
      currentVideoProfile: {},
      loggedUser: null,
    };

    render(
      <Provider value={{ dispatch, state }}>
        <Router history={history}>
          <PrivateRoute path="/favorites" component={AComponent} />
        </Router>
      </Provider>
    );
    expect(history.location.pathname).toBe('/');
  });
});
