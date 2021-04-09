import styled, { css } from 'styled-components';

require('typeface-lato');

export const Message = styled.h1`
  font-family: 'Lato', sans-serif;
  text-align: center;
  font-weight: 300;
  font-size: 50px;
  color: black;
  padding-left: 15px;

  ${(props) =>
    props.dark &&
    css`
      color: white;
    `}
`;

export const Image = styled.img`
  align-items: center;
  width: 250px;
  height: 250px;
  margin-left: auto;
  margin-right: auto;
  display: block;
`;
