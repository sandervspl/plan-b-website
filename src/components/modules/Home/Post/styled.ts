import styled from 'styled-components';
import { media } from 'styles/utils';
import { Header } from 'common';

export const PostContainer = styled.article`
  padding: 20px;

  &:nth-of-type(even) {
    background-color: ${(props) => props.theme.color.secondary.medium};
  }

  ${media.tablet`
    padding: 50px;
  `}

  ${Header} {
    line-height: 70px;
  }
`;

export const DateText = styled.p`
  font-family: ${(props) => props.theme.font.primary};
  font-weight: 300;
  font-size: 15px;
  color: ${(props) => props.theme.color.primary.medium};
`;
