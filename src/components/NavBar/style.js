import styled, { css } from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import InputBase from '@material-ui/core/InputBase';

export const StyledNavBar = styled(AppBar)`
  .MuiToolbar-root {
    background-color: var(--greenblue);
    color: black;
    width: auto;
  }

  ${(props) =>
    props.dark &&
    css`
      .MuiToolbar-root {
        background: var(--darkblue);
        color: white;
      }
    `}
`;

export const SearchBar = styled.div`
  position: relative;
  margin-left: 2%;
  width: auto;
  background-color: var(--dirtywhite);
  opacity: 0.7;
  border-radius: 5em;

  :hover {
    opacity: 0.8;
  }
`;

export const SearchIconStyled = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;

  ${(props) =>
    props.dark &&
    css`
      color: white;
    `}
`;

export const InputStyled = styled(InputBase)`
  padding: 2px;
  margin-left: 15%;

  ${(props) =>
    props.dark &&
    css`
      color: white;
    `}
`;

export const ProfileCollapse = styled.div`
  @media (min-width: 600px) {
    display: none;
  }
  margin-left: auto;
  display: flex;

  .MuiSvgIcon-root {
    align-self: center;
  }
`;

export const FullDisplay = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
  margin-left: auto;
  display: flex;
`;
