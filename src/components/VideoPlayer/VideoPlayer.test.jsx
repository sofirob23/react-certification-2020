import React from 'react';
import { render } from '@testing-library/react';
import videoMock from '../../utils/video-mock.json';
import { store } from '../../state/store';
import VideoPlayer from './index';

describe('Video Player Tests', () => {
  const { Provider } = store;
  const dispatch = jest.fn();
  const state = {
    videoList: [],
    darkMode: false,
    currentVideo: videoMock,
    currentVideoProfile: {},
  };
  test('Video Player is displayed', () => {
    render(
      <Provider value={{ dispatch, state }}>
        <VideoPlayer match={{ params: { videoID: videoMock.id.videoId } }} />
      </Provider>
    );
    const url = `https://www.youtube.com/embed/${videoMock.id.videoId}?controls=0`;

    expect(document.querySelector('iframe')).toBeInTheDocument();
    expect(document.querySelector('iframe').src).toContain(url);
  });
});
