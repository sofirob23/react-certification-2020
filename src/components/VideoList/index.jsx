import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import { store } from '../../state/store';
import VideoSuggestionCard from './VideoSuggestionCard';
// import videos from '../../utils/youtube-videos-mock.json';

import { SuggestionsList } from './style';

const VideoPlayer = () => {
  const globalState = useContext(store);
  const videos =
    globalState.state.videoList.items === undefined
      ? []
      : globalState.state.videoList.items;

  return (
    <SuggestionsList>
      <Grid container spacing={3}>
        {videos.map((video) => {
          return (
            <Grid key={video.id.videoId} item xs={12}>
              <VideoSuggestionCard video={video} />
            </Grid>
          );
        })}
      </Grid>
    </SuggestionsList>
  );
};

export default VideoPlayer;
