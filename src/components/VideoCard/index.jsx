import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { store } from '../../state/store';
import { Card, Description, Title, VideoPreview } from './style';

const VideoCard = (props) => {
  const globalState = useContext(store);

  const videoObject = {
    pathname: `/video/${props.video.id.videoId}`,
    state: {
      videoId: props.video.id.videoId,
      title: props.video.snippet.title,
      description: props.video.snippet.description,
    },
  };

  return (
    <Link to={videoObject}>
      <Card dark={globalState.state.darkMode ? 'true' : undefined}>
        <VideoPreview src={props.video.snippet.thumbnails.medium.url} />
        <Title dark={globalState.state.darkMode ? 'true' : undefined}>
          {props.video.snippet.title}
        </Title>
        <Description dark={globalState.state.darkMode ? 'true' : undefined}>
          {props.video.snippet.description}
        </Description>
      </Card>
    </Link>
  );
};

export default VideoCard;
