import React, { useEffect, useContext } from 'react';
import { store } from '../../state/store';
import youtubeSearch from '../../state/youtube-requests';

import { VideoCanvas } from './style';
import VideoInformation from './VideoInformation';

const VideoPlayer = (props) => {
  const url = `https://www.youtube.com/embed/${props.match.params.videoID}?controls=0&autoplay=1`;
  const { videoID } = props.match.params;
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const title =
    globalState.state.currentVideo.snippet === undefined
      ? 'Title'
      : globalState.state.currentVideo.snippet.title;

  useEffect(() => {
    const fetchVideos = async () => {
      let queryParams = {
        type: 'video',
        id: videoID,
        maxResults: 1,
      };
      const response = await youtubeSearch(queryParams);
      queryParams = {
        type: 'channel',
        q: response.data.items[0].snippet.channelTitle,
        maxResults: 1,
      };
      const responseProfile = await youtubeSearch(queryParams);
      dispatch({
        type: 'play',
        video: response.data.items[0],
        profile: responseProfile.data.items[0],
      });
    };
    fetchVideos();
  }, [dispatch, videoID]);

  return (
    <>
      <VideoCanvas
        allowFullScreen
        frameBorder="0"
        title={title}
        src={url}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      />
      <VideoInformation />
    </>
  );
};

export default VideoPlayer;
