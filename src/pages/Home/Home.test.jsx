import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { StaticRouter } from 'react-router';
import axios from 'axios';
import videos from '../../utils/mocks/youtube-videos-mock.json';
import { store } from '../../state/store';
import Home from './index';

jest.mock('axios');

describe('Home Tests', () => {
  const { Provider } = store;
  const dispatch = jest.fn();
  let state = {
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

  test('fetches successfully data from an API', async () => {
    state = {
      videoList: [],
      darkMode: false,
      currentVideo: {},
      currentVideoProfile: {},
    };
    const data = videos.items;
    const apiServiceMock = axios.get.mockImplementationOnce(() => Promise.resolve(data));
    render(
      <StaticRouter>
        <Provider value={{ dispatch, state }}>
          <Home />
        </Provider>
      </StaticRouter>
    );
    expect(apiServiceMock).toHaveBeenCalled();
  });
});
