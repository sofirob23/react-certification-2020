import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Router, StaticRouter } from 'react-router';
import { createMemoryHistory } from 'history';
import videoMock from '../../../utils/video-mock.json';
import VideoSuggestionCard from './index';

describe('Video Card Suggestion Tests', () => {
  test('Video Card has image and title', () => {
    render(
      <StaticRouter>
        <VideoSuggestionCard video={videoMock} />
      </StaticRouter>
    );
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(videoMock.snippet.title)).toBeInTheDocument();
  });

  test('Video Card redirects on Click', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <VideoSuggestionCard video={videoMock} />
      </Router>
    );
    fireEvent.click(screen.getByRole('img'));
    const newPath = `/video/${videoMock.id.videoId}`;
    expect(history.location.pathname).toBe(newPath);
  });
});
