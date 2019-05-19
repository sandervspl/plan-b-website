import styled from 'styled-components';
import { media } from 'styles';
import { TRANSITION_TIME_MS_SHORT } from 'styles/pageTransition';
import { ContentBlockContainer } from '../styled';

export const PostsContainer = styled.div`
  opacity: 1;
  will-change: opacity;
  transition: opacity ${TRANSITION_TIME_MS_SHORT}ms ease-out;
  
  ${media.tablet`
    max-width: 65%;
  `}

  > *:nth-child(even) {
    ${ContentBlockContainer} {
      background-color: ${(props) => props.theme.color.__OLD__.secondary.medium};
    }
  }
`;
