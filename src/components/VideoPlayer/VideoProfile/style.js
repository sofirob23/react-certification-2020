import styled, { css } from 'styled-components';

require('typeface-lato');

export const VideoDetail = styled.h1`
  font-family: 'Lato', sans-serif;
  text-align: left;
  font-weight: 300;
  font-size: 15px;
  color: black;
  padding-left: 15px;

  ${(props) =>
    props.dark &&
    css`
      color: white;
    `}
`;

export const StyledProfile = styled.div`
  margin-left: 30px;
  display: flex;
`;

export const ProfileIcon = styled.img`
  border-radius: 50%;
  width: 35px;
`;
