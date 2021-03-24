import React from 'react';
import renderer from 'react-test-renderer';
import { createMount } from '@material-ui/core/test-utils';
import Switch from '@material-ui/core/Switch';
import { act } from '@testing-library/react';
import NavBar from './index';

describe('NavBar Tests', () => {
  let mount;

  beforeAll(() => {
    mount = createMount();
  });

  afterAll(() => {
    mount.cleanUp();
  });

  test('NavBar renders correctly', () => {
    const tree = renderer.create(<NavBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('NavBar contains Dark Mode Toggle', () => {
    const wrapper = mount(<NavBar />);
    expect(wrapper.find(Switch)).toHaveLength(1);
  });

  test('NavBar switch changes value when toggled', async () => {
    const wrapper = mount(<NavBar />);
    const toggle = wrapper.find(Switch);
    act(() => {
      toggle.props().onChange({ target: { checked: true } });
    });
    wrapper.update();
    expect(wrapper.find(Switch).props().checked).toBe(true);
  });
});
