import styled from 'styled-components';
import { Header, Subheader } from 'common';
import { media } from 'styles/utils';

export const HeroContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  width: 100%;
  height: 50vh;
  position: relative;
  overflow: hidden;

  ${media.tablet`
    display: flex;
    align-items: center;
    height: 75vh;
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  width: 100%;

  ${media.tablet`
    width: auto;
  `}

  ${Header} {
    text-transform: uppercase;

    ${media.tablet`
      font-size: 120px;
      line-height: 100px;
    `}
  }

  ${Subheader} {
    text-transform: uppercase;
    font-size: 18px;

    ${media.tablet`
      font-size: 22px;
    `}
  }
`;
