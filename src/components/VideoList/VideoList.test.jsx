import React from 'react';
import { render, screen } from '@testing-library/react';
import { StaticRouter } from 'react-router';
import videoMock from '../../utils/mocks/video-mock.json';
import videos from '../../utils/mocks/youtube-videos-mock.json';
import { store } from '../../state/store';
import VideoList from './index';

describe('Video List Tests', () => {
  const { Provider } = store;
  const dispatch = jest.fn();
  const state = {
    videoList: videos,
    darkMode: false,
    currentVideo: videoMock,
    currentVideoProfile: {},
  };
  test('Video List contains 25 suggestions', () => {
    render(
      <Provider value={{ dispatch, state }}>
        <StaticRouter>
          <VideoList />
        </StaticRouter>
      </Provider>
    );
    const items = screen.getAllByRole('img');
    expect(items).toHaveLength(25);
    expect(screen.getByText(videos.items[1].snippet.title)).toBeInTheDocument();
  });
});
