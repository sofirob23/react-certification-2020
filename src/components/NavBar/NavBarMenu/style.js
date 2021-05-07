import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import ListItemIcon from '@material-ui/core/ListItemIcon';

require('typeface-lato');

export const StyledDrawer = styled(Drawer)`
  ${(props) =>
    props.dark &&
    css`
      .MuiDrawer-paper {
        background: var(--darkgrey);
      }
    `}
`;

export const ColumnMenu = styled.div`
  width: 250px;
  height: auto;

  ${(props) =>
    props.dark &&
    css`
      background: var(--darkgrey);
    `}
`;

export const StyledLink = styled(Link)`
  font-family: 'Lato', sans-serif;
  color: black;
  text-decoration: none;
  color: black;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  ${(props) =>
    props.dark &&
    css`
      color: white;
    `}
`;

export const StyledIcon = styled(ListItemIcon)`
  ${(props) =>
    props.dark &&
    css`
      .MuiSvgIcon-root {
        color: white;
        fill: white;
      }
    `}
`;
