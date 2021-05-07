import React, { useState, useContext, useEffect } from 'react';

import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { store } from '../../../state/store';
// import videoMock from '../../../utils/mocks/video-mock.json';
import { FavoriteLabel, FavoriteButton } from './style';

const AddToFavorites = () => {
  const globalState = useContext(store);
  const [selected, setSelected] = useState(false);
  const { dispatch } = globalState;
  const myStorage = window.localStorage;

  const onClick = () => {
    let favoriteList = JSON.parse(myStorage.getItem('favorites')) || [];

    if (!selected) {
      favoriteList.push(globalState.state.currentVideo);
      myStorage.setItem('favorites', JSON.stringify(favoriteList));
      dispatch({ type: 'addFavorite', payload: favoriteList });
    } else {
      favoriteList = favoriteList.filter(
        (video) => video.id.videoId !== globalState.state.currentVideo.id.videoId
      );
      myStorage.setItem('favorites', JSON.stringify(favoriteList));
      dispatch({ type: 'removeFavorite', payload: favoriteList });
    }
    setSelected(!selected);
  };

  useEffect(() => {
    const initializeFavorite = () => {
      const favoriteList = JSON.parse(myStorage.getItem('favorites')) || [];
      if (favoriteList.length > 0 && globalState.state.currentVideo.id !== undefined) {
        const isMatch = favoriteList.filter(
          (video) => video.id.videoId === globalState.state.currentVideo.id.videoId
        );
        if (isMatch.length >= 1) {
          setSelected(true);
        } else {
          setSelected(false);
        }
      } else {
        setSelected(false);
      }
    };
    initializeFavorite();
  }, [globalState, myStorage]);

  return (
    <FavoriteButton onClick={onClick}>
      {selected ? (
        <FavoriteIcon data-testid="favorite-icon" color="primary" />
      ) : (
        <FavoriteBorderIcon data-testid="favorite-icon-border" color="primary" />
      )}
      <FavoriteLabel
        data-testid="test-span"
        dark={globalState.state.darkMode ? 'true' : undefined}
      >
        Add to Favorites
      </FavoriteLabel>
    </FavoriteButton>
  );
};

export default AddToFavorites;
