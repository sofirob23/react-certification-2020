import styled, { css } from 'styled-components';

export const AppBackground = styled.div`
  .body {
    background-color: white;
  }

  ${(props) =>
    props.dark &&
    css`
      .body {
        background-color: var(--darkgrey);
      }
    `}
`;

export const FavoritesBox = styled.div`
  padding: 35px;
`;
