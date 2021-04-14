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
import youtubeSearch from '../../state/youtube-requests';
// import videos from '../../utils/mocks/youtube-videos-mock.json';

const HomePage = () => {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  const videos = globalState.state.videoList.items || [];

  useEffect(() => {
    if (globalState.state.darkMode) {
      document.body.style.backgroundColor = 'var(--darkgrey)';
    } else {
      document.body.style.backgroundColor = 'white';
    }
    const fetchVideos = async () => {
      if (globalState.state.videoList.length === 0) {
        const queryParams = {
          type: 'video',
          q: ' ',
          maxResults: 25,
        };
        const response = await youtubeSearch(queryParams);
        dispatch({ type: 'search', payload: response.data });
      }
    };
    fetchVideos();
  }, [dispatch, globalState]);

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
      {videos.length === undefined || videos.length === 0 ? (
        <NoResults />
      ) : (
        <Grid container justify="center" alignItems="center" spacing={1}>
          {videos.map((video) => {
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
