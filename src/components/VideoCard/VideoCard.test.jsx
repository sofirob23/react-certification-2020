import React from 'react';
import renderer from 'react-test-renderer';
import { createMount } from '@material-ui/core/test-utils';
import VideoCard from './index';

const videoMockData = {
  kind: 'youtube#searchResult',
  etag: '_PVKwNJf_qw9nukFeRFOtQ837o0',
  id: {
    kind: 'youtube#channel',
    channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
  },
  snippet: {
    publishedAt: '2014-09-27T01:39:18Z',
    channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
    title: 'Wizeline',
    description:
      "Wizeline transforms how teams build technology. Its customers accelerate the delivery of innovative products with proven solutions, which combine Wizeline's ...",
    thumbnails: {
      default: {
        url:
          'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s88-c-k-c0xffffffff-no-rj-mo',
      },
      medium: {
        url:
          'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s240-c-k-c0xffffffff-no-rj-mo',
      },
      high: {
        url:
          'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s800-c-k-c0xffffffff-no-rj-mo',
      },
    },
    channelTitle: 'Wizeline',
    liveBroadcastContent: 'upcoming',
    publishTime: '2014-09-27T01:39:18Z',
  },
};

describe('Video Card Tests', () => {
  let mount;

  beforeAll(() => {
    mount = createMount();
  });

  afterAll(() => {
    mount.cleanUp();
  });

  test('Video Card renders correctly', () => {
    const tree = renderer.create(<VideoCard video={videoMockData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Video Card has image', () => {
    const wrapper = mount(<VideoCard video={videoMockData} />);
    expect(wrapper.find('img')).toHaveLength(1);
  });

  test('Video Card has title and description', () => {
    const wrapper = mount(<VideoCard video={videoMockData} />);
    expect(wrapper.find('h1')).toHaveLength(2);
  });
});
