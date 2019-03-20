import { createGlobalStyle, keyframes } from 'styled-components';
import { media } from 'styles/utils';
import { TRANSITION_TIME_MS } from 'styles/pageTransition';
import { VideoContainer } from 'modules/Home/HeroVideo/styled';
import { PostsContainer } from 'modules/Home/Posts/styled';
import { MiscPostsContainer } from 'modules/Home/styled';
import { HeroContainer } from './HeroContainer';
import { PageContentContainer, ContentContainer } from './Content/styled';
import { LogoLinkContainer } from './LogoLink/styled';

const AppearAnim = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

export const AwayFromHomeTransitionStyle = createGlobalStyle`
  ${media.tablet`
    .page-exit {
      ${LogoLinkContainer} {
        display: block;
        transform: translateY(-80px);
      }

      ${HeroContainer} {
        transform: translate(0, -35vh);
      }

      ${VideoContainer},
      ${PostsContainer},
      ${MiscPostsContainer} {
        opacity: 0;
      }

      ${PageContentContainer} {
        transform: translate(0, -55vh);
      }
    }

    .page-enter,
    .page-exit-active,
    .page-enter-done {
      ${LogoLinkContainer} {
        display: block;
        transform: translateY(0);
      }
    }
  `}
`;

export const ToHomeTransitionStyle = createGlobalStyle`
  ${media.tablet`
    ${VideoContainer} {
      transition: opacity ${TRANSITION_TIME_MS}ms ease-out;
      animation-name: ${AppearAnim};
      animation-duration: ${TRANSITION_TIME_MS};
      animation-fill-mode: forwards;
      animation-timing-function: ${(props) => props.theme.easing.easeOutCirc};
    }

    .page-exit {
      ${LogoLinkContainer} {
        display: block;
        transform: translateY(-80px);
      }

      ${ContentContainer} > * {
        animation-name: none;
      }

      ${HeroContainer} {
        transform: translate(0, 0);
      }

      ${PageContentContainer} {
        ${media.tablet`
          transform: translate(0, -45px);
        `}

        @media (min-width: 940px) {
          transform: translate(0, -150px);
        }
      }
    }

    .page-exit-active {
      ${ContentContainer} > * {
        opacity: 0;
      }
    }
  `}
`;
