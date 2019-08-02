import * as i from 'types';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'hooks';
import { getComments } from 'ducks/applications';
import { Heading, EmptyStateText } from 'common';
import Comment from 'modules/ApplicationDetail/Comment';
import AddComment from '../AddComment';
import { DiscussionContainer } from './styled';

const Discussion: React.FC<Props> = ({ applicationId, type }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const messages = useSelector((state) => state.applications.messages);

  useEffect(() => {
    dispatch(getComments(applicationId, type));
  }, []);

  return (
    <DiscussionContainer>
      <Heading as="h2">Discussion</Heading>

      {user && (
        <AddComment
          username={user.username}
          avatar={user.avatar}
          type={type}
        />
      )}

      {messages.length === 0 && (
        <EmptyStateText>There are no comments yet.</EmptyStateText>
      )}

      {messages.map((comment) => (
        <Comment
          key={comment.id}
          username={comment.user.username}
          avatar={comment.user.avatar}
          text={comment.text}
          shareDate={comment.createdAt}
        />
      ))}
    </DiscussionContainer>
  );
};

type Props = {
  applicationId: number;
  type: i.MessageType;
}

export default Discussion;
