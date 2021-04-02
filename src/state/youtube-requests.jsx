import axios from 'axios';

const search = {
  part: 'snippet',
  key: process.env.REACT_APP_API_KEY,
};

const youtubeSearch = (requestParams) => {
  const youtube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: Object.assign(search, requestParams),
  });
  return youtube.get('/search');
};

export default youtubeSearch;
