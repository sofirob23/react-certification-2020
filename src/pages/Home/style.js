import styled, { css } from 'styled-components';

export const Logo = styled.img`
  @media (max-width: 600px) {
    display: none;
  }
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2%;
  margin-bottom: 5%;

  ${(props) =>
    props.dark &&
    css`
      display: none;
    `}
`;

export const LogoDark = styled.img`
  @media (max-width: 600px) {
    display: none;
  }
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2%;
  margin-bottom: 5%;

  ${(props) =>
    !props.dark &&
    css`
      display: none;
    `}
`;

export const SmallLogo = styled.img`
  @media (min-width: 600px) {
    display: none;
  }
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2%;
  margin-bottom: 5%;

  ${(props) =>
    props.dark &&
    css`
      display: none;
    `}
`;

export const SmallLogoDark = styled.img`
  @media (min-width: 600px) {
    display: none;
  }
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2%;
  margin-bottom: 5%;

  ${(props) =>
    !props.dark &&
    css`
      display: none;
    `}
`;

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
