import styled, { css } from 'styled-components';

require('typeface-lato');

export const Title = styled.h1`
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: 15px;
  padding: 5px;
  color: black;

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
  font-size: 10px;
  padding: 5px;
  color: black;

  ${(props) =>
    props.dark &&
    css`
      color: white;
    `}
`;

export const Card = styled.div`
  width: 200px;
  height: 250px;
  overflow: hidden;
  display: inline-block;
  padding-bottom: 10px;
  border-radius: 10px;

  :hover {
    background-color: var(--lightgrey);
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
  height: 90px;
  width: 200px;
`;

export const FavoritesIcon = styled.div`
  .MuiSvgIcon-root {
    padding-left: 150px;
  }
`;
