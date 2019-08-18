import styled from 'styled-components';
import { media } from 'styles';

export const SearchContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;

  ${media.tablet`
    max-width: 67%;
  `}
`;
