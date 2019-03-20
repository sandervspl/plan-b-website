import styled from 'styled-components';
import { media } from 'styles';
import { TRANSITION_TIME_MS_SHORT } from 'styles/pageTransition';

export const MiscPostsContainer = styled.div`
  opacity: 1;
  will-change: opacity;
  transition: opacity ${TRANSITION_TIME_MS_SHORT}ms ease-out;

  ${media.tablet`
    max-width: 35%;
  `}
`;

export const ContentBlockContainer = styled.article`
  padding: 20px;

  ${media.tablet`
    padding: 50px;
  `}
`;
