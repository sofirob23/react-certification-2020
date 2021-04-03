import axios from 'axios';

const search = {
  part: 'snippet',
  key: process.env.REACT_APP_API_KEY,
};

const youtubeSearch = async (requestParams) => {
  axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
  });
  return axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: Object.assign(search, requestParams),
  });
};

export default youtubeSearch;
