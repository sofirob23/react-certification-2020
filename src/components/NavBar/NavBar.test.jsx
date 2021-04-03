import React from 'react';
import renderer from 'react-test-renderer';
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
  };

  test('NavBar renders correctly', () => {
    const tree = renderer
      .create(
        <Provider value={{ dispatch, state }}>
          <NavBar />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

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
});
