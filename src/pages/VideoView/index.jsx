import React, { useContext, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import VideoPlayer from '../../components/VideoPlayer';
import VideoList from '../../components/VideoList';
import { store } from '../../state/store';

const VideoView = (props) => {
  const globalState = useContext(store);

  useEffect(() => {
    if (globalState.state.darkMode) {
      document.body.style.backgroundColor = 'var(--darkgrey)';
    } else {
      document.body.style.backgroundColor = 'white';
    }
  }, [globalState]);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={7}>
          <VideoPlayer {...props} />
        </Grid>
        <Grid item xs={12} md={6} lg={5}>
          <VideoList {...props} />
        </Grid>
      </Grid>
    </>
  );
};

export default VideoView;
