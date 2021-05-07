import React from 'react';
import { Router, StaticRouter } from 'react-router';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import mockUser from '../../../utils/mocks/logged-user-mock.json';
import { store } from '../../../state/store';
import NavBarMenu from './index';

describe('NavBarMenu Tests', () => {
  const { Provider } = store;
  const dispatch = jest.fn();
  let state = {
    videoList: [],
    darkMode: false,
    currentVideo: {},
    currentVideoProfile: {},
    loggedUser: null,
  };

  test('Menu displays on click', () => {
    render(
      <Provider value={{ dispatch, state }}>
        <StaticRouter>
          <NavBarMenu />
        </StaticRouter>
      </Provider>
    );
    userEvent.click(screen.getByRole('button'));
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  test('Menu doesnt contain Favorites when user is  null', () => {
    render(
      <Provider value={{ dispatch, state }}>
        <StaticRouter>
          <NavBarMenu />
        </StaticRouter>
      </Provider>
    );
    userEvent.click(screen.getByRole('button'));
    expect(screen.queryByText('Favorites')).not.toBeInTheDocument();
  });

  test('Menu displays Favorite when user is logged', () => {
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
          <NavBarMenu />
        </StaticRouter>
      </Provider>
    );
    userEvent.click(screen.getByRole('button'));
    expect(screen.getByText('Favorites')).toBeInTheDocument();
  });

  test('Home redirects on Click', () => {
    const history = createMemoryHistory();
    render(
      <Provider value={{ dispatch, state }}>
        <Router history={history}>
          <NavBarMenu />
        </Router>
      </Provider>
    );
    userEvent.click(screen.getByRole('button'));
    userEvent.click(screen.getByText('Home'));
    const newPath = `/`;
    expect(history.location.pathname).toBe(newPath);
  });

  test('Favorite redirect on click', () => {
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
          <NavBarMenu />
        </Router>
      </Provider>
    );
    userEvent.click(screen.getByRole('button'));
    userEvent.click(screen.getByText('Favorites'));
    const newPath = `/favorites`;
    expect(history.location.pathname).toBe(newPath);
  });
});
