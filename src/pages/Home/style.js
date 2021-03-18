import styled from 'styled-components';

export const Logo = styled.img`
  @media (max-width: 600px) {
    display: none;
  }
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2%;
  margin-bottom: 5%;
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
`;
