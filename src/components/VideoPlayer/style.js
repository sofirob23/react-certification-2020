import styled from 'styled-components';

require('typeface-lato');

export const VideoCanvas = styled.iframe`
  @media (max-width: 600px) {
    width: 98%;
    height: 225px;
    padding-top: 15px;
  }
  @media (min-width: 600px) and (max-width: 769px) {
    width: 98%;
    height: 400px;
    padding: 15px;
  }
  @media (min-width: 769px) {
    width: 750px;
    height: 400px;
    padding: 15px;
  }
`;
