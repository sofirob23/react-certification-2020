import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

require('typeface-lato');

export const Title = styled.h1`
  font-family: 'Lato', sans-serif;
  text-align: left;
  font-weight: 400;
  font-size: 15px;
  padding: 5px 0;
  color: black;
  margin-left: 5px;
  margin-right: 10px;

  ${(props) =>
    props.dark &&
    css`
      color: white;
    `}
`;

export const VideoDetail = styled.h1`
  font-family: 'Lato', sans-serif;
  text-align: left;
  font-weight: 300;
  font-size: 10px;
  color: black;
  margin-left: 30px;

  ${(props) =>
    props.dark &&
    css`
      color: white;
    `}
`;

export const Card = styled.div`
  padding: 2px;
  :hover {
    background-color: var(--lightgrey);
  }

  @media (min-width: 600px) {
    margin-left: 60px;
  }

  ${(props) =>
    props.dark &&
    css`
      background: var(--darkgrey);
      :hover {
        background-color: var(--hovergrey);
      }
    `}
`;

export const VideoPreview = styled.img`
  height: 60px;
  width: 100px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
