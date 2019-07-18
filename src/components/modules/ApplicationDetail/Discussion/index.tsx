import * as i from 'types';
import React from 'react';
import { useSelector } from 'hooks';
import { Heading } from 'common';
import Comment from 'modules/ApplicationDetail/Comment';
import AddComment from '../AddComment';
import { DiscussionContainer } from './styled';

const Discussion: React.FC<Props> = ({ comments }) => {
  const user = useSelector((state) => state.user.data);

  return (
    <DiscussionContainer>
      <Heading as="h2">Discussion</Heading>

      {user && (
        <AddComment
          username={user.username}
          avatar={user.avatar}
        />
      )}

      {comments.map((comment) => (
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
  comments: i.Comment[];
};

export default Discussion;
