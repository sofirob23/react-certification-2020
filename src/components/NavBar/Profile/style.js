import styled, { css } from 'styled-components';

require('typeface-lato');

export const ProfileCollapse = styled.div`
  .MuiSvgIcon-root {
    align-self: center;
  }
`;

export const ProfileName = styled.h1`
  font-family: 'Lato', sans-serif;
  text-align: justify;
  font-weight: 300;
  font-size: 20px;
  padding: 5px;
  color: black;

  ${(props) =>
    props.dark &&
    css`
      color: white;
    `}
`;

export const ProfileIcon = styled.img`
  border-radius: 50%;
  width: 45%;
  height: 45%;
`;
