import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { store } from '../../../state/store';
import AddToFavorites from './index';

describe('Add to Favorites Tests', () => {
  const { Provider } = store;
  const dispatch = jest.fn();

  const state = {
    videoList: [],
    darkMode: false,
    currentVideo: {},
    currentVideoProfile: {},
  };
  test('AddToFavorites renders correctly', async () => {
    render(
      <Provider value={{ dispatch, state }}>
        <AddToFavorites />
      </Provider>
    );
    expect(screen.getByTestId('test-span')).toBeInTheDocument();
  });

  test('Changes icon fill on Click', async () => {
    render(
      <Provider value={{ dispatch, state }}>
        <AddToFavorites />
      </Provider>
    );
    expect(screen.getByTestId('favorite-icon-border')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('favorite-icon-border'));
    expect(screen.getByTestId('favorite-icon')).toBeInTheDocument();
  });
});
