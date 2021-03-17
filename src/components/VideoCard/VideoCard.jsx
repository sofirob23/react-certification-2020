import React from 'react';

import { Card, Description, Title, VideoPreview } from './VideoCard-styling';

const VideoCard = (video) => {
  return (
    <Card>
      <VideoPreview src={video.video.snippet.thumbnails.medium.url} />
      <Title>{video.video.snippet.title}</Title>
      <Description>{video.video.snippet.description}</Description>
    </Card>
  );
};

export default VideoCard;
