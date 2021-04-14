import styled, { css } from 'styled-components';

import InputBase from '@material-ui/core/InputBase';

export const SearchBarStyled = styled.div`
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
