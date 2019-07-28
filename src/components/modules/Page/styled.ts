import styled, { css } from 'styled-components';
import bgImg from 'images/bg.jpg';
import { media } from 'styles';

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.color.background};
  
  ${media.tablet`
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(${bgImg});
      background-position: center center;
      background-size: cover;
      opacity: .08;
    }

    > div {
      z-index: 1;
    }
  `}
`;

export const PageContent = styled.div`
  margin: 0 auto 50px;
  width: 100%;
  max-width: 1005px;
  overflow-x: hidden;

  ${media.tablet`
    overflow-x: visible;
  `}
`;

export const PageInner = styled.div<PageInnerProps>`
  ${media.tablet<PageInnerProps>`
    ${(props) => !props.withoutShadow && css`
      box-shadow: ${(props) => props.theme.shadow.content};
    `}
  `}
`;

type PageInnerProps = {
  withoutShadow?: boolean;
}
