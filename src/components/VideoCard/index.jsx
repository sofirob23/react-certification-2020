import React from 'react';

import { Card, Description, Title, VideoPreview } from './style';

const VideoCard = (props) => {
  return (
    <Card>
      <VideoPreview src={props.video.snippet.thumbnails.medium.url} />
      <Title>{props.video.snippet.title}</Title>
      <Description>{props.video.snippet.description}</Description>
    </Card>
  );
};

export default VideoCard;
