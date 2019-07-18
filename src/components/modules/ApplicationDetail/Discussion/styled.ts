import styled from 'styled-components';
import { media } from 'styles';
import { Heading } from 'common';
import { CommentContainer } from 'modules/ApplicationDetail/Comment/styled';

export const DiscussionContainer = styled.div`
  margin-top: 40px;
  padding: 15px 0;
  width: 100%;
  background-color: ${(props) => props.theme.color.background};
  border-color: ${(props) => props.theme.color.border};
  border-top: 1px solid;

  ${Heading} {
    text-align: center;
  }

  ${CommentContainer} {
    margin: 40px 20px 0;
  }

  ${media.tablet`
    margin: 0;
  `}
`;
