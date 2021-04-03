import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import videoMock from '../../../utils/video-mock.json';
import { store } from '../../../state/store';
import VideoInformation from './index';

describe('Video Information Tests', () => {
  const { Provider } = store;
  const dispatch = jest.fn();
  const state = {
    videoList: [],
    darkMode: false,
    currentVideo: videoMock,
    currentVideoProfile: {},
  };

  test('Video Information contains title and description', () => {
    render(
      <Provider value={{ dispatch, state }}>
        <VideoInformation />
      </Provider>
    );
    expect(screen.getByText(videoMock.snippet.title)).toBeInTheDocument();
    expect(screen.getByText(videoMock.snippet.description)).toBeInTheDocument();
  });
});
