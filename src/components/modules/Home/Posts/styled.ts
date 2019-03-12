import styled from 'styled-components';
import { media } from 'styles/utils';
import { Paragraph, Header } from 'common';
import { ContentBlockContainer } from '../ContentBlock/styled';

export const DateText = styled(Paragraph)`
  margin-bottom: 20px;
  font-size: 15px;
  color: ${(props) => props.theme.color.primary.medium};
`;

export const PostsContainer = styled.div`
  ${media.tablet`
    max-width: 65%;
  `}
`;

export const PostBlock = styled(ContentBlockContainer)`
  ${Header} {
    line-height: 50px;
    font-size: 40px;

    ${media.tablet`
      line-height: 70px;
      font-size: 65px;
    `}
  }
`;
