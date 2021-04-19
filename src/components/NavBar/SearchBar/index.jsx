import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import youtubeSearch from '../../../state/youtube-requests';
import { store } from '../../../state/store';

import { InputStyled, SearchBarStyled, SearchIconStyled } from './style';

const SearchBar = () => {
  const [querySearch, setSearch] = useState('');
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const history = useHistory();

  const redirect = () => {
    history.push('/');
  };
  const searchVideo = async () => {
    const queryParams = {
      type: 'video',
      q: querySearch,
      maxResults: 25,
    };
    const response = await youtubeSearch(queryParams);
    dispatch({ type: 'search', payload: response.data });
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleKeyDown = async (e) => {
    if (e.key === 'Enter') {
      await searchVideo();
      redirect();
    }
  };

  const onClick = async () => {
    await searchVideo();
    redirect();
  };

  return (
    <SearchBarStyled>
      <SearchIconStyled onClick={onClick}>
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
