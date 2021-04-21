import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { store } from '../../../state/store';
import NoResults from './index';

describe('No Results Tests', () => {
  const { Provider } = store;
  const dispatch = jest.fn();
  const state = {
    videoList: [],
    darkMode: false,
    currentVideo: {},
    currentVideoProfile: {},
  };

  test('No Results renders correctly', () => {
    render(
      <Provider value={{ dispatch, state }}>
        <NoResults />
      </Provider>
    );
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText('No results found!')).toBeInTheDocument();
  });

  test('No Results renders no favorites found', () => {
    render(
      <Provider value={{ dispatch, state }}>
        <NoResults favorites />
      </Provider>
    );
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText('No Favorites found!')).toBeInTheDocument();
  });
});
