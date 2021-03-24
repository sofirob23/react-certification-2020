import React from 'react';
import renderer from 'react-test-renderer';
import videos from '../../utils/youtube-videos-mock.json';
import filterVideos from '../../utils/filterVideos';
import HomePage from './index';

describe('HomePage Tests', () => {
  test('HomePage renders correctly', () => {
    const tree = renderer.create(<HomePage />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Filter video returns json', () => {
    expect(typeof filterVideos(videos, 'youtube#video')).toBe('object');
  });

  test('Filter returns videos', () => {
    expect(filterVideos(videos, 'youtube#video')[0].id.kind).toBe('youtube#video');
  });
});
