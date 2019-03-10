import styled from 'styled-components';
import { Header } from 'common';
import { media } from 'styles/utils';

export const HeroContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  width: 100%;
  height: 75vh;
  position: relative;
  overflow: hidden;

  ${Header} {
    ${media.tablet`
      font-size: 120px;
    `}
  }
`;

export const Content = styled.div`
  z-index: 1;
  height: 300px;
`;
