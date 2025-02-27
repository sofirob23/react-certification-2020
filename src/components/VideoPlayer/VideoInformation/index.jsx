import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import AddToFavorites from '../AddToFavorites';
import { store } from '../../../state/store';
// import video from '../../../utils/mocks/video-mock.json';
import { Title, Description } from './style';
import VideoProfile from '../VideoProfile';

const VideoInformation = () => {
  const globalState = useContext(store);
  const title = globalState?.state?.currentVideo?.snippet?.title;
  const description = globalState?.state?.currentVideo?.snippet?.description;

  /* const title = video.snippet?.title;
  const description = video.snippet?.description; */
  return (
    <>
      <Grid container spacing={1}>
        <Title dark={globalState.state.darkMode ? 'true' : undefined}>{title}</Title>
        <Grid item xs={6}>
          <VideoProfile />
        </Grid>
        <Grid item xs={6}>
          <AddToFavorites />
        </Grid>
      </Grid>
      <Description dark={globalState.state.darkMode ? 'true' : undefined}>
        {description}
      </Description>
    </>
  );
};

export default VideoInformation;
