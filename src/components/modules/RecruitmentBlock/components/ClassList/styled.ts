import styled from 'styled-components';
import { media } from 'styles';

export const ClassListContainer = styled.ul`
  margin-top: 15px;
  padding: 0;
  list-style: none;

  li {
    margin-bottom: 5px;
    font-size: 16px;

    ${media.tablet`
      font-size: 16px;
    `}
  }

  ${media.tablet`
    display: block;
  `}
`;
