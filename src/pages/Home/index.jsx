import React, { useContext, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Logo, SmallLogo, LogoDark, SmallLogoDark } from './style';
import VideoCard from '../../components/VideoCard';
import NoResults from '../../components/NotFound/NoResults';
import logo from '../../utils/assets/logo.gif';
import smallLogo from '../../utils/assets/small-logo.gif';
import logoDark from '../../utils/assets/logo-dark.png';
import smallLogoDark from '../../utils/assets/small-logo-dark.png';
import { store } from '../../state/store';
import videos from '../../utils/youtube-videos-mock.json';

const HomePage = () => {
  const globalState = useContext(store);
  /* const videos =
    globalState.state.videoList.items === undefined
      ? []
      : globalState.state.videoList.items; */

  useEffect(() => {
    if (globalState.state.darkMode) {
      document.body.style.backgroundColor = 'var(--darkgrey)';
    } else {
      document.body.style.backgroundColor = 'white';
    }
  }, [globalState]);

  return (
    <Box mx="5%">
      <Logo
        src={logo}
        alt="logo"
        dark={globalState.state.darkMode ? 'true' : undefined}
        light={globalState.state.darkMode ? undefined : 'true'}
      />
      <LogoDark
        src={logoDark}
        alt="logo"
        dark={globalState.state.darkMode ? 'true' : undefined}
        light={globalState.state.darkMode ? undefined : 'true'}
      />
      <SmallLogo
        src={smallLogo}
        alt="logo"
        dark={globalState.state.darkMode ? 'true' : undefined}
        light={globalState.state.darkMode ? undefined : 'true'}
      />
      <SmallLogoDark
        src={smallLogoDark}
        alt="logo"
        dark={globalState.state.darkMode ? 'true' : undefined}
        light={globalState.state.darkMode ? undefined : 'true'}
      />
      {videos === [] ? (
        <NoResults />
      ) : (
        <Grid container justify="center" alignItems="center" spacing={1}>
          {videos.items.map((video) => {
            return (
              <Grid key={video.id.videoId} item xs={12} sm={6} md={3} align="center">
                <VideoCard video={video} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </Box>
  );
};

export default HomePage;
