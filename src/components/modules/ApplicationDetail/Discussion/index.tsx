import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'hooks';
import { fetchComments } from 'ducks/applications';
import { Heading, EmptyStateText, Loader } from 'common';
import Comment from 'modules/ApplicationDetail/Comment';
import AddComment from '../AddComment';
import { DiscussionContainer } from './styled';

const Discussion: React.FC<Props> = ({ applicationUuid }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const messages = useSelector((state) => state.applications.messages);
  const loading = useSelector((state) => state.applications.loading);

  useEffect(() => {
    dispatch(fetchComments(applicationUuid, 'private'));
  }, []);

  return (
    <DiscussionContainer>
      <Heading as="h2">Discussion</Heading>

      {loading ? (
        <Loader />
      ) : (
         <>
          {user && (
            <AddComment username={user.username} avatar={user.avatar} />
          )}

          {messages.length === 0 && (
            <EmptyStateText>There are no comments yet.</EmptyStateText>
          )}

          {messages.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
         </>
      )}

    </DiscussionContainer>
  );
};

type Props = {
  applicationUuid: string;
}

export default Discussion;
