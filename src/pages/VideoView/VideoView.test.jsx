import React from 'react';
import renderer from 'react-test-renderer';
import { store } from '../../state/store';
import VideoView from './index';

describe('VideoView Tests', () => {
  const { Provider } = store;
  const dispatch = jest.fn();
  const state = {
    videoList: [],
    darkMode: false,
    currentVideo: {},
    currentVideoProfile: {},
  };
  const props = {
    params: {
      videoID: 'HYyRZiwBWc8',
    },
  };
  test('VideoView renders correctly', () => {
    const tree = renderer
      .create(
        <Provider value={{ dispatch, state }}>
          <VideoView match={props} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
