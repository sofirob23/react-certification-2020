import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import { store } from '../../../state/store';
import { Card, Title, VideoPreview, StyledLink } from './style';

const VideoSuggestionCard = (props) => {
  const globalState = useContext(store);
  console.log('Props', props);
  const videoObject = props.favorites
    ? { pathname: `/favorites/${props.video.id.videoId}` }
    : {
        pathname: `/video/${props.video.id.videoId}`,
      };

  return (
    <StyledLink to={videoObject}>
      <Card dark={globalState.state.darkMode ? 'true' : undefined}>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <VideoPreview src={props.video.snippet.thumbnails.default.url} />
          </Grid>
          <Grid item xs={8}>
            <Title dark={globalState.state.darkMode ? 'true' : undefined}>
              {props.video.snippet.title}
            </Title>
          </Grid>
        </Grid>
      </Card>
    </StyledLink>
  );
};

export default VideoSuggestionCard;
