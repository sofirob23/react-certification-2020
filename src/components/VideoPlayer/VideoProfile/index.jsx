import React, { useContext } from 'react';
import { store } from '../../../state/store';
// import profile from '../../../utils/mocks/profile-mock.json';
import { StyledProfile, VideoDetail, ProfileIcon } from './style';

const VideoProfile = () => {
  const globalState = useContext(store);
  const profile = globalState.state.currentVideoProfile;

  return (
    <>
      {profile.snippet === undefined ? (
        <></>
      ) : (
        <StyledProfile>
          <ProfileIcon src={profile.snippet.thumbnails.default.url} />
          <VideoDetail dark={globalState.state.darkMode ? 'true' : undefined}>
            {profile.snippet.channelTitle}
          </VideoDetail>
        </StyledProfile>
      )}
    </>
  );
};

export default VideoProfile;
