import styled from 'styled-components';
import { media } from 'styles';
import { ContentBlockContainer } from '../styled';

export const PostsContainer = styled.div`
  opacity: 1;
  will-change: opacity;
  transition: opacity 600ms ease-out;
  
  ${media.tablet`
    max-width: 65%;
  `}

  > *:nth-child(even) {
    ${ContentBlockContainer} {
      background-color: ${(props) => props.theme.color.secondary.medium};
    }
  }
`;
