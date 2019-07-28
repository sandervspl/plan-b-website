import styled, { css } from 'styled-components';
import { media } from 'styles';

export const PageContainer = styled.div<PageContainerProps>`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.color.background};
  
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
  margin: 65px auto 50px;
  width: 100%;
  max-width: ${(props) => props.theme.width.page};
  overflow-x: hidden;

  ${media.tablet`
    margin-top: 110px;
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
