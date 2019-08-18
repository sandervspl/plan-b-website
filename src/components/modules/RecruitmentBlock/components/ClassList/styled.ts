import styled from 'styled-components';
import { media } from 'styles';

export const ClassListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0;
  padding: 0 15px;
  list-style: none;

  li {
    margin-bottom: 5px;
    font-size: 16px;

    ${media.tablet`
      font-size: 16px;
    `}
  }
`;
