import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { store } from '../../state/store';
import { Card, Description, FavoritesIcon, Title, VideoPreview } from './style';

const VideoCard = (props) => {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const myStorage = window.localStorage;
  const videoObject = props.favorites
    ? { pathname: `/favorites/${props.video.id.videoId}` }
    : {
        pathname: `/video/${props.video.id.videoId}`,
      };

  const removeFromFavorite = () => {
    let favoriteList = JSON.parse(myStorage.getItem('favorites')) || [];
    favoriteList = favoriteList.filter(
      (video) => video.id.videoId !== globalState.state.currentVideo.id.videoId
    );
    myStorage.setItem('favorites', JSON.stringify(favoriteList));
    dispatch({ type: 'removeFavorite', payload: favoriteList });
  };

  return (
    <Link to={videoObject}>
      <Card dark={globalState.state.darkMode ? 'true' : undefined}>
        <VideoPreview src={props.video.snippet.thumbnails.medium.url} />
        <Title dark={globalState.state.darkMode ? 'true' : undefined}>
          {props.video.snippet.title}
        </Title>
        <Description dark={globalState.state.darkMode ? 'true' : undefined}>
          {props.video.snippet.description}
        </Description>
        {props.favorites === true ? (
          <FavoritesIcon>
            <FavoriteIcon
              data-testid="favorite-icon"
              color="primary"
              onClick={removeFromFavorite}
            />{' '}
          </FavoritesIcon>
        ) : (
          <></>
        )}
      </Card>
    </Link>
  );
};

export default VideoCard;
