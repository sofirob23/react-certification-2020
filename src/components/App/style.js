import styled, { css } from 'styled-components';

export const AppBackground = styled.div`
  .background {
    background: black;
  }

  ${(props) =>
    props.dark &&
    css`
      .background {
        background: var(--darkgrey);
      }
    `}
`;
