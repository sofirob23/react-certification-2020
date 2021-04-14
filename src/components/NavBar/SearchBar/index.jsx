import React, { useState, useContext, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import youtubeSearch from '../../../state/youtube-requests';
import { store } from '../../../state/store';

import { InputStyled, SearchBarStyled, SearchIconStyled } from './style';

const SearchBar = () => {
  const [querySearch, setSearch] = useState('');
  const globalState = useContext(store);
  const { dispatch } = globalState;

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleKeyDown = async (e) => {
    if (e.key === 'Enter') {
      const queryParams = {
        type: 'video',
        q: querySearch,
        maxResults: 25,
      };
      const response = await youtubeSearch(queryParams);
      dispatch({ type: 'search', payload: response.data });
    }
  };

  useEffect(() => {
    const fetchVideos = async () => {
      if (globalState.state.videoList.length === 0) {
        const queryParams = {
          type: 'video',
          q: querySearch,
          maxResults: 25,
        };
        const response = await youtubeSearch(queryParams);
        dispatch({ type: 'search', payload: response.data });
      }
    };
    fetchVideos();
  });

  return (
    <SearchBarStyled>
      <SearchIconStyled>
        <SearchIcon />
      </SearchIconStyled>
      <InputStyled
        id="search-bar"
        value={querySearch}
        className="search-bar"
        placeholder="Search"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </SearchBarStyled>
  );
};

export default SearchBar;
