import React, { useContext } from 'react';

import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import { store } from '../../state/store';
import SearchBar from './SearchBar';
import Toggle from './Toggle';

import { FullDisplay, ProfileCollapse, StyledNavBar } from './style';

const NavBar = () => {
  const globalState = useContext(store);

  return (
    <>
      <StyledNavBar
        dark={globalState.state.darkMode ? 'true' : undefined}
        position="sticky"
      >
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <SearchBar />
          <ProfileCollapse>
            <AccountCircle fontSize="large" />
          </ProfileCollapse>
          <FullDisplay className="FullDisplay">
            <Toggle />
            <AccountCircle fontSize="large" />
          </FullDisplay>
        </Toolbar>
      </StyledNavBar>
    </>
  );
};
export default NavBar;
