import React, { useContext } from 'react';
import { store } from '../../../state/store';

import { StyledProfile, VideoDetail, ProfileIcon } from './style';

const Profile = () => {
  const globalState = useContext(store);
  const profile = globalState.state.currentVideoProfile;

  return (
    <>
      {profile.snippet === undefined ? (
        <></>
      ) : (
        <StyledProfile>
          <ProfileIcon src={profile.snippet.thumbnails.default.url} />
          <VideoDetail>{profile.snippet.channelTitle}</VideoDetail>
        </StyledProfile>
      )}
    </>
  );
};

export default Profile;
