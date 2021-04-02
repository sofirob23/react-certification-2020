import React, { useState } from 'react';

import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import { FavoriteLabel, FavoriteButton } from './style';

const AddToFavorites = () => {
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
      <FavoriteLabel>Add to Favorites</FavoriteLabel>
    </FavoriteButton>
  );
};

export default AddToFavorites;
