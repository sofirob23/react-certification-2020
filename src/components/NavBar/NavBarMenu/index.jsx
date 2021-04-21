import React, { useState, useContext } from 'react';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import { store } from '../../../state/store';

import { ColumnMenu, StyledDrawer, StyledIcon, StyledLink } from './style';

const NavBarMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const globalState = useContext(store);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment key="left">
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <StyledDrawer
        anchor="left"
        open={anchorEl}
        onClose={handleClose}
        dark={globalState.state.darkMode ? 'true' : undefined}
      >
        <ColumnMenu dark={globalState.state.darkMode ? 'true' : undefined}>
          <List>
            <StyledLink to="/" dark={globalState.state.darkMode ? 'true' : undefined}>
              <ListItem button key="Home" onClick={handleClose}>
                <StyledIcon dark={globalState.state.darkMode ? 'true' : undefined}>
                  <HomeIcon />
                </StyledIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </StyledLink>
            {globalState.state.loggedUser !== null ? (
              <>
                <Divider />
                <StyledLink
                  to="/favorites"
                  dark={globalState.state.darkMode ? 'true' : undefined}
                >
                  <ListItem button key="Favorites" onClick={handleClose}>
                    <StyledIcon dark={globalState.state.darkMode ? 'true' : undefined}>
                      <FavoriteIcon />
                    </StyledIcon>
                    <ListItemText primary="Favorites" />
                  </ListItem>
                </StyledLink>
              </>
            ) : (
              <> </>
            )}
          </List>
        </ColumnMenu>
      </StyledDrawer>
    </React.Fragment>
  );
};

export default NavBarMenu;
