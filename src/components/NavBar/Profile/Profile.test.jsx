import React from 'react';
import { StaticRouter, Router } from 'react-router';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import mockUser from '../../../utils/mocks/logged-user-mock.json';
import { store } from '../../../state/store';
import Profile from './index';

describe('Profile Tests', () => {
  const { Provider } = store;
  const dispatch = jest.fn();
  let state = {
    videoList: [],
    darkMode: false,
    currentVideo: {},
    currentVideoProfile: {},
    loggedUser: null,
  };

  test('Profile contains icon', () => {
    render(
      <Provider value={{ dispatch, state }}>
        <StaticRouter>
          <Profile />
        </StaticRouter>
      </Provider>
    );
    expect(screen.getByTestId('profile-icon')).toBeInTheDocument();
  });

  test('On Profile click displays auth0 modal', () => {
    render(
      <Provider value={{ dispatch, state }}>
        <StaticRouter>
          <Profile />
        </StaticRouter>
      </Provider>
    );
    userEvent.click(screen.getByTestId('profile-icon'));
    expect(screen.getByLabelText('close')).toBeInTheDocument();
  });

  test('Shows picture when user is logged', () => {
    state = {
      videoList: [],
      darkMode: false,
      currentVideo: {},
      currentVideoProfile: {},
      loggedUser: mockUser,
    };
    render(
      <Provider value={{ dispatch, state }}>
        <StaticRouter>
          <Profile />
        </StaticRouter>
      </Provider>
    );
    expect(screen.getByAltText('profile')).toBeInTheDocument();
  });

  test('Displays logout when click on profile', () => {
    state = {
      videoList: [],
      darkMode: false,
      currentVideo: {},
      currentVideoProfile: {},
      loggedUser: mockUser,
    };
    render(
      <Provider value={{ dispatch, state }}>
        <StaticRouter>
          <Profile />
        </StaticRouter>
      </Provider>
    );
    userEvent.click(screen.getByTestId('profile-button'));
    expect(screen.getByText('Logout')).toBeInTheDocument();
  });

  test('Logout redirects to home', () => {
    const history = createMemoryHistory();
    state = {
      videoList: [],
      darkMode: false,
      currentVideo: {},
      currentVideoProfile: {},
      loggedUser: mockUser,
    };
    render(
      <Provider value={{ dispatch, state }}>
        <Router history={history}>
          <Profile />
        </Router>
      </Provider>
    );
    userEvent.click(screen.getByTestId('profile-button'));
    userEvent.click(screen.getByText('Logout'));
    const newPath = `/`;
    expect(history.location.pathname).toBe(newPath);
  });
});
