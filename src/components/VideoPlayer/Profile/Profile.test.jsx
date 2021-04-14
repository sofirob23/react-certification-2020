import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import profileMock from '../../../utils/profile-mock.json';
import { store } from '../../../state/store';
import Profile from './index';

describe('Profile Tests', () => {
  const { Provider } = store;
  const dispatch = jest.fn();
  const state = {
    videoList: [],
    darkMode: false,
    currentVideo: {},
    currentVideoProfile: profileMock,
  };

  test('Profile renders correctly', () => {
    render(
      <Provider value={{ dispatch, state }}>
        <Profile />
      </Provider>
    );
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('img').src).toContain(
      profileMock.snippet.thumbnails.default.url
    );
    expect(screen.getByText(profileMock.snippet.channelTitle)).toBeInTheDocument();
  });
});
