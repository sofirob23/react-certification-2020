import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { StaticRouter } from 'react-router';
import videos from '../../utils/mocks/youtube-videos-mock.json';
import mockUser from '../../utils/mocks/logged-user-mock.json';
import { store } from '../../state/store';
import Favorites from './index';

describe('Favorites Tests', () => {
  const { Provider } = store;
  const dispatch = jest.fn();
  let state = {
    videoList: [],
    darkMode: false,
    currentVideo: {},
    currentVideoProfile: {},
    favorites: videos.items,
    loggedUser: mockUser,
  };

  test('Renders favorites list', () => {
    render(
      <StaticRouter>
        <Provider value={{ dispatch, state }}>
          <Favorites />
        </Provider>
      </StaticRouter>
    );
    expect(screen.getAllByRole('img').length).toBeGreaterThan(1);
    expect(screen.getByText(videos.items[1].snippet.title)).toBeInTheDocument();
    expect(screen.getByText(videos.items[1].snippet.description)).toBeInTheDocument();
  });

  test('Renders No favorites found when favorites is empty', () => {
    state = {
      videoList: [],
      darkMode: false,
      currentVideo: {},
      currentVideoProfile: {},
      favorites: [],
      loggedUser: mockUser,
    };
    render(
      <StaticRouter>
        <Provider value={{ dispatch, state }}>
          <Favorites />
        </Provider>
      </StaticRouter>
    );
    expect(screen.getByText('No Favorites found!')).toBeInTheDocument();
  });
});
