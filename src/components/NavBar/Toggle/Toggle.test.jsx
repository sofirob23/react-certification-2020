import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { store } from '../../../state/store';
import Toggle from './index';

describe('Toggle Tests', () => {

  const { Provider } = store;
  const dispatch = jest.fn();
  const state = {
    videoList: [],
    darkMode: false,
    currentVideo: {},
    currentVideoProfile: {},
  };

  test('Gets checked when toggled', async () => {
    render(
      <Provider value={{ dispatch, state }}>
        <Toggle />
      </Provider>
    );
    userEvent.click(screen.getByRole('checkbox'));
    expect(screen.getByRole('checkbox')).toBeChecked();
  });
});
