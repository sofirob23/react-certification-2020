import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Auth0Lock } from 'auth0-lock';
import SmallLogo from '../../../utils/assets/small-logo.png';
import { store } from '../../../state/store';

import { ProfileCollapse, ProfileIcon } from './style';

const Profile = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const myStorage = window.sessionStorage;
  const history = useHistory();

  const clientId = process.env.REACT_APP_CLIENT_ID || '';
  const domain = process.env.REACT_APP_DOMAIN || '';

  const options = {
    theme: {
      logo: SmallLogo,
      primaryColor: 'var( --greenblue)',
      languageDictionary: {
        title: 'Log in',
      },
    },
  };
  const lock = new Auth0Lock(clientId, domain, options);
  let profile = null;

  lock.on('authenticated', function login(authResult) {
    lock.getUserInfo(authResult.accessToken, function getUserInfo(error, profileResult) {
      if (error) {
        return;
      }
      profile = profileResult;
      myStorage.setItem('loggedUser', JSON.stringify(profile));
      dispatch({ type: 'login', payload: profile });
    });
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const Login = () => {
    history.push('/');
    lock.show();
  };

  const Logout = () => {
    history.push('/');
    lock.logout();
    myStorage.removeItem('loggedUser');
    dispatch({ type: 'logout', payload: profile });
    setAnchorEl(null);
  };
  return (
    <>
      <ProfileCollapse>
        {globalState.state.loggedUser === null ? (
          <AccountCircle data-testid="profile-icon" onClick={Login} fontSize="large" />
        ) : (
          <>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
              data-testid="profile-button"
            >
              <ProfileIcon
                alt="profile"
                src={globalState.state.loggedUser.picture}
                color="primary"
              />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={Logout}>Logout</MenuItem>
            </Menu>
          </>
        )}
      </ProfileCollapse>
    </>
  );
};
export default Profile;
