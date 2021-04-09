import React, { useState, useContext } from 'react';

import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { store } from '../../../state/store';
import { FavoriteLabel, FavoriteButton } from './style';

const AddToFavorites = () => {
  const globalState = useContext(store);
  const [selected, setSelected] = useState(false);

  const onClick = () => {
    setSelected(!selected);
  };

  return (
    <FavoriteButton onClick={onClick}>
      {selected ? (
        <FavoriteIcon color="primary" />
      ) : (
        <FavoriteBorderIcon color="primary" />
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
