import styled, { css } from 'styled-components';
import { media } from 'styles';

export const PageContainer = styled.div<PageContainerProps>`
  width: 100%;
  height: auto;
  min-height: 100vh;
  background-color: ${(props) => props.theme.color.background};
  -webkit-overflow-scrolling: touch;
  
  ${media.tablet<PageContainerProps>`
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(${(props) => props.bgImg});
      background-position: center center;
      background-size: cover;
      opacity: .07;
    }

    > div {
      z-index: 1;
    }
  `}
`;

type PageContainerProps = {
  bgImg: string;
}

export const PageContent = styled.div`
  padding: 65px 0 50px;
  width: 100%;
  max-width: ${(props) => props.theme.width.page};
  overflow-x: hidden;

  ${media.tablet`
    padding-top: 110px;
    margin: 0 auto;
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
