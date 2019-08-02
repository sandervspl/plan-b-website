import styled from 'styled-components';
import { media } from 'styles';
import { Heading, EmptyStateText } from 'common';
import { CommentContainer } from 'modules/ApplicationDetail/Comment/styled';
import { AddCommentContainer } from 'modules/ApplicationDetail/AddComment/styled';

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

  ${AddCommentContainer} {
    margin: 20px 20px 0;
  }

  ${EmptyStateText} {
    text-align: center;
    margin-top: 20px;
  }

  ${media.tablet`
    margin: 0;
    padding: 40px 0;
    border-top: 0;
    border-left: 1px solid;
  `}
`;
