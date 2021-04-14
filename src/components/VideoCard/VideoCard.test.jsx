import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Router, StaticRouter } from 'react-router';
import { createMemoryHistory } from 'history';
import videoMock from '../../utils/video-mock.json';
import VideoCard from './index';

describe('Video Card Tests', () => {
  test('Video Card has image title and description', () => {
    render(
      <StaticRouter>
        <VideoCard video={videoMock} />
      </StaticRouter>
    );
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(videoMock.snippet.title)).toBeInTheDocument();
    expect(screen.getByText(videoMock.snippet.description)).toBeInTheDocument();
  });

  test('Video Card redirects on Click', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <VideoCard video={videoMock} />
      </Router>
    );
    fireEvent.click(screen.getByRole('img'));
    const newPath = `/video/${videoMock.id.videoId}`;
    expect(history.location.pathname).toBe(newPath);
  });
});
