import React, { useContext, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { store } from '../../state/store';
import youtubeSearch from '../../state/youtube-requests';
import VideoSuggestionCard from './VideoSuggestionCard';
import videos from '../../utils/youtube-videos-mock.json';

import { SuggestionsList } from './style';

const VideoList = () => {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  // const videos = globalState.state.videoList.items || [];

  useEffect(() => {
    const fetchVideos = async () => {
      if (globalState.state.currentVideo.snippet !== undefined) {
        const queryParams = {
          type: 'video',
          q: globalState.state.currentVideo.snippet.title,
          maxResults: 10,
        };
        const response = await youtubeSearch(queryParams);
        dispatch({ type: 'search', payload: response.data });
      }
    };
    fetchVideos();
  });

  return (
    <SuggestionsList>
      <Grid container spacing={3}>
        {videos.map((video) => {
          return (
            <Grid key={video.id.videoId} item xs={12}>
              <VideoSuggestionCard role="img" video={video} />
            </Grid>
          );
        })}
      </Grid>
    </SuggestionsList>
  );
};

export default VideoList;
