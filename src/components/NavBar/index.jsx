import React, { useContext } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { store } from '../../state/store';
import SearchBar from './SearchBar';
import Toggle from './Toggle';
import Profile from './Profile';
import NavBarMenu from './NavBarMenu';

import { FullDisplay, StyledNavBar } from './style';

const NavBar = () => {
  const globalState = useContext(store);

  return (
    <>
      <StyledNavBar
        dark={globalState.state.darkMode ? 'true' : undefined}
        position="sticky"
      >
        <Toolbar>
          <NavBarMenu />
          <SearchBar />
          <FullDisplay className="FullDisplay">
            <Toggle />
          </FullDisplay>
          <Profile />
        </Toolbar>
      </StyledNavBar>
    </>
  );
};
export default NavBar;
