import styled from 'styled-components';
import { media } from 'styles/utils';
import { Header, Paragraph } from 'common';

export const PostContainer = styled.article`
  padding: 20px;

  &:nth-of-type(even) {
    background-color: ${(props) => props.theme.color.secondary.medium};
  }

  ${media.tablet`
    padding: 50px;
  `}
  
  ${Header} {
    line-height: 50px;

    ${media.tablet`
      line-height: 70px;
    `}
  }
`;

export const DateText = styled(Paragraph)`
  margin-bottom: 20px;
  font-size: 15px;
  color: ${(props) => props.theme.color.primary.medium};
`;
