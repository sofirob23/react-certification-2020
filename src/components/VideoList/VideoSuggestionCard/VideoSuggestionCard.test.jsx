import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Router, StaticRouter } from 'react-router';
import { createMemoryHistory } from 'history';
import videoMock from '../../../utils/mocks/video-mock.json';
import { store } from '../../../state/store';
import VideoSuggestionCard from './index';

describe('Video Card Suggestion Tests', () => {
  const { Provider } = store;
  const dispatch = jest.fn();
  const state = {
    videoList: [],
    darkMode: false,
    currentVideo: videoMock,
    currentVideoProfile: {},
  };
  test('Video Card has image and title', () => {
    render(
      <Provider value={{ dispatch, state }}>
        <StaticRouter>
          <VideoSuggestionCard video={videoMock} />
        </StaticRouter>
      </Provider>
    );
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(videoMock.snippet.title)).toBeInTheDocument();
  });

  test('Video Card redirects on Click', () => {
    const history = createMemoryHistory();
    render(
      <Provider value={{ dispatch, state }}>
        <Router history={history}>
          <VideoSuggestionCard video={videoMock} />
        </Router>
      </Provider>
    );
    fireEvent.click(screen.getByRole('img'));
    const newPath = `/video/${videoMock.id.videoId}`;
    expect(history.location.pathname).toBe(newPath);
  });
});
