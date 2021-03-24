import React, { useState } from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import IconButton from '@material-ui/core/IconButton';
import Switch from '@material-ui/core/Switch';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import {
  FullDisplay,
  InputStyled,
  ProfileCollapse,
  StyledNavBar,
  SearchBar,
  SearchIconStyled,
} from './style';

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <StyledNavBar dark={darkMode ? 'true' : undefined} position="sticky">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <SearchBar>
            <SearchIconStyled>
              <SearchIcon />
            </SearchIconStyled>
            <InputStyled className="search-bar" placeholder="Search" />
          </SearchBar>

          <ProfileCollapse>
            <AccountCircle fontSize="large" />
          </ProfileCollapse>
          <FullDisplay className="FullDisplay">
            <FormGroup className="ToggleGroup">
              <FormControlLabel
                control={
                  <Switch
                    id="ToggleSwitch"
                    checked={darkMode}
                    onChange={handleChange}
                    color="default"
                  />
                }
                label="Dark Mode"
              />
            </FormGroup>
            <AccountCircle fontSize="large" />
          </FullDisplay>
        </Toolbar>
      </StyledNavBar>
    </>
  );
};
export default NavBar;
