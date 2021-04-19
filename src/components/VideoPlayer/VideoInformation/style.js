import styled, { css } from 'styled-components';

require('typeface-lato');

export const Title = styled.h1`
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: 20px;
  padding-left: 25px;

  ${(props) =>
    props.dark &&
    css`
      color: white;
    `}
`;

export const Description = styled.h1`
  font-family: 'Lato', sans-serif;
  text-align: justify;
  font-weight: 300;
  font-size: 15px;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 10px;

  ${(props) =>
    props.dark &&
    css`
      color: white;
    `}
`;
