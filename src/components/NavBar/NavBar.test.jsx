import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { store } from '../../state/store';
import NavBar from './index';

describe('NavBar Tests', () => {
  const { Provider } = store;
  const dispatch = jest.fn();
  const state = {
    videoList: [],
    darkMode: false,
    currentVideo: {},
    currentVideoProfile: {},
    loggedUser: null,
  };

  test('NavBar contains Dark Mode Toggle', () => {
    render(
      <Provider value={{ dispatch, state }}>
        <NavBar />
      </Provider>
    );
    expect(screen.getByText('Dark Mode')).toBeInTheDocument();
  });

  test('NavBar contains SearchBar', () => {
    render(
      <Provider value={{ dispatch, state }}>
        <NavBar />
      </Provider>
    );
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  });

  test('NavBar contains Profile', () => {
    render(
      <Provider value={{ dispatch, state }}>
        <NavBar />
      </Provider>
    );
    expect(screen.getByTestId('profile-icon')).toBeInTheDocument();
  });

  test('NavBar contains Menu Button', () => {
    render(
      <Provider value={{ dispatch, state }}>
        <NavBar />
      </Provider>
    );
    expect(screen.getByLabelText('menu')).toBeInTheDocument();
  });
});
