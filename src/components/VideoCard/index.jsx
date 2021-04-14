import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Description, Title, VideoPreview } from './style';

const VideoCard = (props) => {
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
      <Card>
        <VideoPreview src={props.video.snippet.thumbnails.medium.url} />
        <Title>{props.video.snippet.title}</Title>
        <Description>{props.video.snippet.description}</Description>
      </Card>
    </Link>
  );
};

export default VideoCard;
