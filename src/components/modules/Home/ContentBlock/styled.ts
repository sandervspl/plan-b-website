import styled from 'styled-components';
import { media } from 'styles/utils';

export const ContentBlockContainer = styled.article`
  padding: 20px;

  &:nth-of-type(even) {
    background-color: ${(props) => props.theme.color.secondary.medium};
  }

  ${media.tablet`
    padding: 50px;
  `}
`;