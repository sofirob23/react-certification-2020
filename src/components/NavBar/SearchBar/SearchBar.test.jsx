import React, { useContext } from 'react';
import renderer from 'react-test-renderer';
import { act } from '@testing-library/react';
import { createMount, createShallow } from '@material-ui/core/test-utils';
import videos from '../../../utils/youtube-videos-mock.json';
import { store } from '../../../state/store';
import SearchBar from './index';
import { InputStyled, SearchBarStyled, SearchIconStyled } from './style';

describe('SearchBar Tests', () => {
  let mount;
  let shallow;

  beforeAll(() => {
    mount = createMount();
    shallow = createShallow();
  });

  afterAll(() => {
    mount.cleanUp();
    shallow.cleanUp();
  });

  const { Provider } = store;


  test('SearchBar renders correctly', () => {
    const tree = renderer.create(<SearchBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('SearchBar changes text and updates state', () => {
    const state = {
      videoList: videos.items,
      darkMode: false,
      currentVideo: {},
      currentVideoProfile: {},
    };
    const wrapper = mount(
      <Provider value={{ state }}>
        <SearchBar />
      </Provider>
    );
    const input = wrapper.find(InputStyled);
    act(() => {
      input.props().onChange({ target: { value: 'Wizeline' } });
    });
    wrapper.update();
    expect(wrapper.find(InputStyled).props().value).toEqual('Wizeline');
  });
});
