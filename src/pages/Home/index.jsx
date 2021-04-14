import React, { useContext } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Logo, SmallLogo } from './style';
import VideoCard from '../../components/VideoCard';
import logo from '../../utils/assets/logo.gif';
import smallLogo from '../../utils/assets/small-logo.gif';
import { store } from '../../state/store';
// import videos from '../../utils/youtube-videos-mock.json';

const HomePage = () => {
  const globalState = useContext(store);
  const videos =
    globalState.state.videoList.items === undefined
      ? []
      : globalState.state.videoList.items;

  return (
    <Box mx="5%">
      <Logo src={logo} alt="loading..." />
      <SmallLogo src={smallLogo} alt="loading..." />
      <Grid container justify="center" alignItems="center" spacing={1}>
        {videos.map((video) => {
          return (
            <Grid key={video.id.videoId} item xs={12} sm={6} md={3} align="center">
              <VideoCard video={video} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default HomePage;
