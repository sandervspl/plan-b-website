import { createGlobalStyle, keyframes } from 'styled-components';
import { media } from 'styles/utils';
import { TRANSITION_TIME_MS, TRANSITION_TIME_MS_SHORT } from 'styles/pageTransition';
import { VideoContainer } from 'modules/Home/HeroVideo/styled';
import { PostsContainer } from 'modules/Home/Posts/styled';
import { MiscPostsContainer } from 'modules/Home/styled';
import { Content } from 'modules/Home/Hero/styled';
import { HeroContainer } from './HeroContainer';
import { PageContentContainer, ContentContainer } from './Content/styled';
import { LogoLinkContainer } from './LogoLink/styled';
import { BaseHeroContainer } from './BaseHero/styled';

const AppearAnim = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

export const AwayFromHomeTransitionStyle = createGlobalStyle`
  ${LogoLinkContainer} {
    display: block;
  }

  .page-enter {
    ${BaseHeroContainer} {
      opacity: 0;
      transition: opacity ${TRANSITION_TIME_MS_SHORT}ms linear;
    }
  }

  .page-enter-active {
    ${BaseHeroContainer} {
      opacity: 1;
    }
  }

  .page-exit {
    ${BaseHeroContainer} {
      transition: opacity ${TRANSITION_TIME_MS_SHORT}ms 400ms linear;
    }

    ${ContentContainer} > * {
      animation-name: none;
    }
  }

  .page-exit-active {
    ${BaseHeroContainer},
    ${ContentContainer} > * {
      opacity: 0;
    }
  }

  ${media.tablet`
    .page-exit {
      ${Content} {
        animation-name: none;
        transition: opacity ${TRANSITION_TIME_MS_SHORT}ms linear;
      }

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
        animation-name: none;
        opacity: 0;
      }

      ${PageContentContainer} {
        transform: translate(0, -55vh);
      }
    }

    .page-exit-active {
      ${Content} {
        opacity: 0;
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
  .page-exit {
    ${LogoLinkContainer} {
      display: block;
    }

    ${BaseHeroContainer} {
      transition: opacity ${TRANSITION_TIME_MS_SHORT}ms 400ms linear;
    }
  }

  .page-exit-active {
    ${BaseHeroContainer} {
      opacity: 0;
    }
  }

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
          transform: translate(0, -23vh);
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
