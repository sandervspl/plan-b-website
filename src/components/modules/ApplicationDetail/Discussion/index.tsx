import * as i from 'types';
import React from 'react';
import { Heading } from 'common';
import Comment from 'modules/ApplicationDetail/Comment';
import { DiscussionContainer } from './styled';

const Discussion: React.FC<Props> = ({ comments }) => {
  return (
    <DiscussionContainer>
      <Heading as="h2">Discussion</Heading>
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
