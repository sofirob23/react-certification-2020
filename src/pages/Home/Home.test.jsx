import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { StaticRouter } from 'react-router';
import videos from '../../utils/youtube-videos-mock.json';
import { store } from '../../state/store';
import Home from './index';

describe('Home Tests', () => {
  const { Provider } = store;
  const dispatch = jest.fn();
  const state = {
    videoList: videos,
    darkMode: false,
    currentVideo: {},
    currentVideoProfile: {},
  };

  test('Contains Logo', () => {
    render(
      <StaticRouter>
        <Provider value={{ dispatch, state }}>
          <Home />
        </Provider>
      </StaticRouter>
    );
    expect(screen.getAllByAltText('logo').length).toBeGreaterThan(0);
  });

  test('Renders 25 results on not empty list', () => {
    render(
      <StaticRouter>
        <Provider value={{ dispatch, state }}>
          <Home />
        </Provider>
      </StaticRouter>
    );
    expect(screen.getAllByRole('img').length).toBeGreaterThan(25);
  });
});
