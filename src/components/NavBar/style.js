import styled, { css } from 'styled-components';

import AppBar from '@material-ui/core/AppBar';

export const StyledNavBar = styled(AppBar)`
  .MuiToolbar-root {
    background-color: white;
    color: black;
    width: auto;
  }

  ${(props) =>
    props.dark &&
    css`
      .MuiToolbar-root {
        background: var(--darkgrey);
        color: white;
      }
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
