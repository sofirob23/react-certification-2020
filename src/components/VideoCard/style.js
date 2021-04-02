import styled from 'styled-components';

require('typeface-lato');

export const Title = styled.h1`
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: 15px;
  padding: 5px;
  color: black;
`;

export const Description = styled.h1`
  font-family: 'Lato', sans-serif;
  text-align: justify;
  font-weight: 300;
  font-size: 10px;
  padding: 5px;
  color: black;
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
`;

export const VideoPreview = styled.img`
  height: 90px;
  width: 200px;
`;
