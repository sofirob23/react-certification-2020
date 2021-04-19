import React from 'react';
import { render } from '@testing-library/react';
import axios from 'axios';
import videoMock from '../../utils/mocks/video-mock.json';
import profileMock from '../../utils/mocks/profile-mock.json';
import videoListMock from '../../utils/mocks/youtube-videos-mock.json';
import { store } from '../../state/store';
import VideoPlayer from './index';

jest.mock('axios');

describe('Video Player Tests', () => {
  const { Provider } = store;
  const dispatch = jest.fn();
  const state = {
    videoList: videoListMock,
    darkMode: false,
    currentVideo: videoMock,
    currentVideoProfile: profileMock,
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

  test('Makes 3 youtubeSearch requests', () => {
    const videoListData = videoListMock.items;
    const apiServiceMock = axios.get.mockImplementationOnce(() =>
      Promise.resolve(videoListData)
    );

    const apiServiceMockProfile = axios.get.mockImplementationOnce(() =>
      Promise.resolve(profileMock)
    );

    const apiServiceMockVideo = axios.get.mockImplementationOnce(() =>
      Promise.resolve(videoMock)
    );
    render(
      <Provider value={{ dispatch, state }}>
        <VideoPlayer match={{ params: { videoID: videoMock.id.videoId } }} />
      </Provider>
    );

    expect(apiServiceMock).toHaveBeenCalled();
    expect(apiServiceMockProfile).toHaveBeenCalled();
    expect(apiServiceMockVideo).toHaveBeenCalled();
  });
});
