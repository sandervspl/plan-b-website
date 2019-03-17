import { createGlobalStyle, keyframes } from 'styled-components';
import { media } from 'styles/utils';
import { VideoContainer } from 'modules/Home/HeroVideo/styled';
import { TRANSITION_TIME_MS } from 'styles/pageTransition';
import { PostsContainer } from 'modules/Home/Posts/styled';
import { MiscPostsContainer } from 'modules/Home/MiscPosts/styled';
import { HeroContainer } from './HeroContainer';
import { PageContentContainer } from './Content/styled';

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
      ${HeroContainer} {
        transform: translate(0, -45vh);
      }

      ${VideoContainer},
      ${PostsContainer},
      ${MiscPostsContainer} {
        opacity: 0;
      }

      ${PageContentContainer} {
        transform: translate(0, -65vh);
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
  `}
`;
