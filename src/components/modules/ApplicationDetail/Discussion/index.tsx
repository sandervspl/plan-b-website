import * as i from 'types';
import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'hooks';
import { fetchComments } from 'ducks/applications';
import { Heading, EmptyStateText, Loader } from 'common';
import { TabsContainer, Tabs, Tab, ActiveTabLine } from 'common/Tabs';
import Comment from 'modules/ApplicationDetail/Comment';
import AddComment from '../AddComment';
import { DiscussionContainer } from './styled';

type TabId = 0 | 1;

const Discussion: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const messages = useSelector((state) => state.applications.messages);
  const loading = useSelector((state) => state.applications.loadingMessages);
  const windowWidth = useSelector((state) => state.ui.windowWidth);
  const isAdmin = useSelector((state) => state.user.isAdmin);
  const [curTab, setCurTab] = useState<TabId>(0);
  const [tabsContainerWidth, setTabsContainerWidth] = useState(0);
  const TabsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(fetchComments(getTypeStr(curTab)));
  }, []);

  useEffect(() => {
    if (!TabsContainerRef.current) {
      return;
    }

    setTabsContainerWidth(TabsContainerRef.current.clientWidth);
  }, [windowWidth]);

  const getTypeStr = (tabId: TabId): i.CommentType => {
    if (tabId === 0) {
      return 'public';
    }

    return 'private';
  };

  const onTabChange = (tabId: TabId) => () => {
    if (tabId === curTab) return;

    setCurTab(tabId);

    const commentsType = getTypeStr(tabId);

    setTimeout(() => {
      dispatch(fetchComments(commentsType));
    }, 500);
  };

  return (
    <DiscussionContainer>
      <Heading as="h2">Discussion</Heading>

      {isAdmin && (
        <TabsContainer ref={TabsContainerRef}>
          <Tabs>
            <Tab
              isactive={curTab === 0}
              onClick={onTabChange(0)}
            >
              Public
            </Tab>
            <Tab
              isactive={curTab === 1}
              onClick={onTabChange(1)}
            >
              Officers
            </Tab>
          </Tabs>
          <ActiveTabLine activeId={curTab} width={`${tabsContainerWidth / 2}px`} />
        </TabsContainer>
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
