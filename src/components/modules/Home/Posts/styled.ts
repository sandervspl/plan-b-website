import styled from 'styled-components';
import { media } from 'styles';

export const PostsContainer = styled.div`
  opacity: 1;
  will-change: opacity;
  transition: opacity 300ms ease-out;
  
  ${media.tablet`
    max-width: 65%;
  `}
`;
