import React from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import videos from '../../../utils/youtube-videos-mock.json';
import { store } from '../../../state/store';
import SearchBar from './index';

jest.mock('axios');

describe('SearchBar Tests', () => {
  const { Provider } = store;
  const dispatch = jest.fn();
  const state = {
    videoList: videos.items,
    darkMode: false,
    currentVideo: {},
    currentVideoProfile: {},
  };

  test('SearchBar is empty', () => {
    render(
      <Provider value={{ dispatch, state }}>
        <SearchBar />
      </Provider>
    );
    expect(screen.getByRole('textbox')).toHaveValue('');
  });

  test('SearchBar changes text', () => {
    render(
      <Provider value={{ dispatch, state }}>
        <SearchBar />
      </Provider>
    );
    userEvent.type(screen.getByRole('textbox'), 'Wizeline');
    expect(screen.getByRole('textbox')).toHaveValue('Wizeline');
  });

  test('fetches successfully data from an API', async () => {
    const data = videos.items;

    const apiServiceMock = axios.get.mockImplementationOnce(() => Promise.resolve(data));
    render(
      <Provider value={{ dispatch, state }}>
        <SearchBar handleKeyDown={apiServiceMock} />
      </Provider>
    );
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'Wizeline{enter}');
    expect(apiServiceMock).toHaveBeenCalled();
  });
});
