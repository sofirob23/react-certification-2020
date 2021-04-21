import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Router, StaticRouter } from 'react-router';
import { createMemoryHistory } from 'history';
import videoMock from '../../utils/mocks/video-mock.json';
import { store } from '../../state/store';
import VideoCard from './index';

describe('Video Card Tests', () => {
  const { Provider } = store;
  const dispatch = jest.fn();
  const state = {
    videoList: [],
    darkMode: false,
    currentVideo: videoMock,
    currentVideoProfile: {},
  };

  test('Video Card has image title and description', () => {
    render(
      <Provider value={{ dispatch, state }}>
        <StaticRouter>
          <VideoCard video={videoMock} />
        </StaticRouter>
      </Provider>
    );
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(videoMock.snippet.title)).toBeInTheDocument();
    expect(screen.getByText(videoMock.snippet.description)).toBeInTheDocument();
  });

  test('Video Card redirects on Click', () => {
    const history = createMemoryHistory();
    render(
      <Provider value={{ dispatch, state }}>
        <Router history={history}>
          <VideoCard video={videoMock} />
        </Router>
      </Provider>
    );
    fireEvent.click(screen.getByRole('img'));
    const newPath = `/video/${videoMock.id.videoId}`;
    expect(history.location.pathname).toBe(newPath);
  });

  test('Video Card from favorites contains icon', () => {
    render(
      <Provider value={{ dispatch, state }}>
        <StaticRouter>
          <VideoCard video={videoMock} favorites />
        </StaticRouter>
      </Provider>
    );
    expect(screen.getByTestId('favorite-icon')).toBeInTheDocument();
  });

  test('Video Card favorite redirects to favorites on Click', () => {
    const history = createMemoryHistory();
    render(
      <Provider value={{ dispatch, state }}>
        <Router history={history}>
          <VideoCard video={videoMock} favorites />
        </Router>
      </Provider>
    );
    fireEvent.click(screen.getByRole('img'));
    const newPath = `/favorites/${videoMock.id.videoId}`;
    expect(history.location.pathname).toBe(newPath);
  });
});
