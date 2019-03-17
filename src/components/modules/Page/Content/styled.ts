import styled, { css } from 'styled-components';
import { media } from 'styles';
import { TRANSITION_TIME_MS } from 'styles/pageTransition';

export const PageContentContainer = styled.div`
  width: 100%;
  transform: translate(0, -45vh);
  will-change: transform;
  transition: transform ${TRANSITION_TIME_MS}ms ${(props) => props.theme.easing.easeOutCirc};
  overflow-x: hidden;

  ${media.tablet<PageContentContainerProps>`
    transform: translate(0, -45px);

    ${(props) => !props.positionLower && css`
      transform: translate(0, -65vh);
    `}
  `}

  @media (min-width: 940px) {
    ${(props) => props.positionLower && css`
      transform: translate(0, -150px);
    `}
  }

  ${media.desktop`
    margin: 0 auto;
    max-width: 940px;
  `}
`;

type PageContentContainerProps = {
  positionLower: boolean;
}

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  background-color: ${(props) => props.theme.color.secondary};

  ${media.tablet`
    flex-direction: row;
  `}
`;
