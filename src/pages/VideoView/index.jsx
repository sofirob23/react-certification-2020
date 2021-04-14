import React from 'react';
import Grid from '@material-ui/core/Grid';
import VideoPlayer from '../../components/VideoPlayer';
import VideoList from '../../components/VideoList';

const VideoView = (props) => {
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
