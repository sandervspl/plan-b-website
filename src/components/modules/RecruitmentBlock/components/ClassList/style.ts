import styled from 'styled-components';
import { media } from 'styles';

export const ClassListContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;

  ${media.tablet`
    display: block;
  `}
`;
