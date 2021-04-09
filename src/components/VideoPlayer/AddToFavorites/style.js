import styled, { css } from 'styled-components';

require('typeface-lato');

export const FavoriteLabel = styled.span`
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: 15px;
  text-align: center;
  padding-left: 3px;
  padding-bottom: 3px;

  ${(props) =>
    props.dark &&
    css`
      color: white;
    `}
`;

export const FavoriteButton = styled.div`
  position: relative;
  right: 0px;
  @media (min-width: 600px) {
    padding-left: 60%;
  }
`;
