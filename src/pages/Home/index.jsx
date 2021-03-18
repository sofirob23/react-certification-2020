import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Logo, SmallLogo } from './style';
import VideoCard from '../../components/VideoCard';
import logo from '../../utils/assets/logo.gif';
import smallLogo from '../../utils/assets/small-logo.gif';
import videos from '../../utils/youtube-videos-mock.json';

const HomePage = () => {
  return (
    <Box mx="5%">
      <Logo src={logo} alt="loading..." />
      <SmallLogo src={smallLogo} alt="loading..." />
      <Grid container justify="center" alignItems="center" spacing={1}>
        {videos.items
          .filter((video) => video.id.kind === 'youtube#video')
          .map((video) => {
            return (
              <Grid key={video.etag} item xs={12} sm={6} md={4} align="center">
                <VideoCard video={video} />
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};

export default HomePage;
