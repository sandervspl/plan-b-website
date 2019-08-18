import styled from 'styled-components';
import { media } from 'styles';

export const CharacterGrid = styled.div`
  width: 100%;
  
  ${media.tablet`
    display: grid;
    grid-template-columns: 1fr 1fr;
  `}
`;
