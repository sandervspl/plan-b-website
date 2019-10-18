import styled from 'styled-components';
import { media } from 'styles';
import { Heading, EmptyStateText, Loader } from 'common';
import { CommentContainer } from 'modules/ApplicationDetail/Comment/styled';
import { AddCommentContainer } from 'modules/ApplicationDetail/AddComment/styled';
import { TabsContainer, Tab } from 'common/Tabs';

export const DiscussionContainer = styled.div`
  position: relative;
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

  ${Loader} {
    position: absolute;
    left: 50%;
    margin-top: 30px;
    transform: translateX(-50%);
  }

  ${TabsContainer} {
    margin-top: 24px;

    ${Tab} {
      width: 50%;
    }
  }

  ${media.tablet`
    margin: 0;
    padding: 40px 0;
    border-top: 0;
    border-left: 1px solid;
  `}
`;
