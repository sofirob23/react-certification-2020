import React, { useContext, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import VideoCard from '../../components/VideoCard';
import NoResults from '../../components/NotFound/NoResults';
import { store } from '../../state/store';

import { FavoritesBox } from './style';

const Favorites = () => {
  const globalState = useContext(store);

  const videos = globalState.state.favorites || [];

  useEffect(() => {
    if (globalState.state.darkMode) {
      document.body.style.backgroundColor = 'var(--darkgrey)';
    } else {
      document.body.style.backgroundColor = 'white';
    }
  }, [globalState]);

  return (
    <FavoritesBox>
      {videos.length === undefined || videos.length === 0 ? (
        <NoResults favorites />
      ) : (
        <Box mx="5%">
          <Grid container justify="center" alignItems="center" spacing={1}>
            {videos.map((video) => {
              return video.id !== undefined ? (
                <Grid key={video.id.videoId} item xs={12} sm={6} md={3} align="center">
                  <VideoCard video={video} favorites />
                </Grid>
              ) : (
                <></>
              );
            })}
          </Grid>
        </Box>
      )}
    </FavoritesBox>
  );
};

export default Favorites;
