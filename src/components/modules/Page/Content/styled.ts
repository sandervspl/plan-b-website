import styled, { css } from 'styled-components';
import { media } from 'styles';
import { TRANSITION_TIME_MS, TRANSITION_TIME_MS_SHORT } from 'styles/pageTransition';

export const PageContentContainer = styled.div`
  width: 100%;
  transform: translate(0, -35vh);
  will-change: transform;
  transition: transform ${TRANSITION_TIME_MS}ms ${(props) => props.theme.easing.easeOutCirc};
  overflow-x: hidden;

  ${media.tablet<PageContentContainerProps>`
    transform: translate(0, -45px);

    ${(props) => !props.positionLower && css`
      transform: translate(0, -55vh);
    `}
  `}

  @media (min-width: 940px) {
    ${(props) => props.positionLower && css`
      transform: translate(0, -23vh);
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

  > * {
    opacity: 1;
    will-change: opacity;
    transition: opacity ${TRANSITION_TIME_MS_SHORT}ms ease-out;
  }

  ${media.tablet`
    flex-direction: row;
  `}
`;
