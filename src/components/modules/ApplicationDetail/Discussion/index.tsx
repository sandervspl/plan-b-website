import * as i from 'types';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'hooks';
import { localStorageHelper } from 'services';
import { actions as applicationActions, fetchComments } from 'ducks/applications';
import { Heading, EmptyStateText, Loader } from 'common';
import Tabs from 'common/Tabs';
import Comment from 'modules/ApplicationDetail/Comment';
import AddComment from '../AddComment';
import { DiscussionContainer } from './styled';

const Discussion: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const comments = useSelector((state) => state.applications.comments);
  const loading = useSelector((state) => state.applications.loadingComments);
  const commentsType = useSelector((state) => state.applications.commentsType);
  const newComments = useSelector((state) => state.applications.newComments);
  const isAdmin = useSelector((state) => state.user.isAdmin);
  const applicationUuid = useSelector((state) => state.applications.detail!.uuid);
  const [curTab, setCurTab] = useState(0);

  useEffect(() => {
    const tabId = commentsType === 'public' ? 0 : 1;

    setCurTab(tabId);

    setTimeout(() => {
      dispatch(fetchComments(commentsType))
        .then((comments) => {
          // Set comments as "seen"
          const storage = localStorageHelper.applicationsOverview.get(applicationUuid);

          if (storage) {
            storage.newComments = false;

            if (comments) {
              storage.comments = comments.messages.length;
            }

            localStorageHelper.applicationsOverview.save(storage);
          }
        });
    }, 500);
  }, [commentsType]);

  const getTypeStr = (tabId: number): i.CommentType => {
    if (tabId === 0) {
      return 'public';
    }

    return 'private';
  };

  const onTabChange = (tabId: number) => {
    const commentsType = getTypeStr(tabId);
    dispatch(applicationActions.setCommentsType(commentsType));
  };

  return (
    <DiscussionContainer>
      <Heading as="h2">Discussion</Heading>

      {isAdmin && (
        <Tabs.Container onChange={onTabChange} activeTab={curTab}>
          <Tabs.Tab notification={newComments.public}>
            Public ({comments.count.public})
          </Tabs.Tab>
          <Tabs.Tab notification={newComments.private}>
            Officers ({comments.count.private})
          </Tabs.Tab>
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
        comments.messages.length === 0 ? (
          <EmptyStateText>There are no comments yet.</EmptyStateText>
        ) : (
          comments.messages.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))
        )
      )}
    </DiscussionContainer>
  );
};

export default Discussion;
