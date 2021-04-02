import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import AddToFavorites from '../AddToFavorites';
import { store } from '../../../state/store';

import { Title, Description } from './style';
import Profile from '../Profile';

const VideoInformation = () => {
  const globalState = useContext(store);
  const title =
    globalState.state.currentVideo.snippet === undefined
      ? 'Video Tour | Welcome to Wizeline Guadalajara Video Tour | Welcome to Wizeline Guadalajara Video Tour | Welcome to Wizeline Guadalajara      '
      : globalState.state.currentVideo.snippet.title;
  const description =
    globalState.state.currentVideo.snippet === undefined
      ? 'This is the description dnajsdkahsjdhakjdhaskjdhakjdhjahdjkhsadkjsahda'
      : globalState.state.currentVideo.snippet.description;

  return (
    <>
      <Grid container spacing={1}>
        <Title>{title}</Title>
        <Grid item xs={6}>
          <Profile />
        </Grid>
        <Grid item xs={6}>
          <AddToFavorites />
        </Grid>
      </Grid>
      <Description>{description}</Description>
    </>
  );
};

export default VideoInformation;
