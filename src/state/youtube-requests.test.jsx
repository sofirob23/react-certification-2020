import axios from 'axios';
import videos from '../utils/mocks/youtube-videos-mock.json';
import youtubeSearch from './youtube-requests';

jest.mock('axios');

describe('API Tests', () => {
  test('fetches successfully data from an API', async () => {
    const data = videos.items;

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    const queryParams = {
      type: 'video',
      q: 'Wizeline',
      maxResults: 25,
    };
    await expect(youtubeSearch(queryParams)).resolves.toEqual(data);
  });
});
