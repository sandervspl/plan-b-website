import * as i from 'types';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'hooks';
import { actions as applicationActions, fetchComments } from 'ducks/applications';
import { Heading, EmptyStateText, Loader } from 'common';
import Tabs from 'common/Tabs';
import Comment from 'modules/ApplicationDetail/Comment';
import AddComment from '../AddComment';
import { DiscussionContainer } from './styled';

const Discussion: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const messages = useSelector((state) => state.applications.messages);
  const loading = useSelector((state) => state.applications.loadingMessages);
  const isAdmin = useSelector((state) => state.user.isAdmin);
  const commentsType = useSelector((state) => state.applications.commentsType);
  const [curTab, setCurTab] = useState(0);

  useEffect(() => {
    dispatch(fetchComments(getTypeStr(curTab)));
  }, []);

  useEffect(() => {
    const tabId = commentsType === 'public' ? 0 : 1;

    console.log(commentsType, tabId);

    setCurTab(tabId);

    setTimeout(() => {
      dispatch(fetchComments(commentsType));
    }, 500);
  }, [commentsType]);

  const getTypeStr = (tabId: number): i.CommentType => {
    if (tabId === 0) {
      return 'public';
    }

    return 'private';
  };

  const onTabChange = (tabId: number) => {
    // if (tabId === curTab) return;

    const commentsType = getTypeStr(tabId);
    dispatch(applicationActions.setCommentsType(commentsType));
  };

  return (
    <DiscussionContainer>
      <Heading as="h2">Discussion</Heading>

      {isAdmin && (
        <Tabs.Container onChange={onTabChange} activeTab={curTab}>
          <Tabs.Tab>Public</Tabs.Tab>
          <Tabs.Tab>Officers</Tabs.Tab>
        </Tabs.Container>
      )}

      {user && (
        <AddComment
          username={user.username}
          avatar={user.avatar}
          type={getTypeStr(curTab)}
        />
      )}

      {loading ? (
        <Loader />
      ) : (
        messages.length === 0 ? (
          <EmptyStateText>There are no comments yet.</EmptyStateText>
        ) : (
          messages.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))
        )
      )}
    </DiscussionContainer>
  );
};

export default Discussion;
