import * as i from 'types';
import React, { useState, useEffect, useMemo } from 'react';
import { getUrl, redirect, localStorageHelper } from 'services';
import { fetchApplications } from 'ducks/applications';
import { useSelector, useDispatch, useRouter } from 'hooks';
import CircleIcon from 'vectors/circle.svg';
import CheckCircleIcon from 'vectors/check-circle.svg';
import NotInterestedIcon from 'vectors/not-interested.svg';
import Page from 'modules/Page';
import ApplicationItem from 'modules/Applications/ApplicationItem';
import { Heading, Loader, EmptyStateText, Button } from 'common';
import Tabs from 'common/Tabs';
import {
  ApplicationsHeading, ApplicationsContainer, ApplicationsList,
} from 'modules/Applications/styled';

const TAB: Record<i.ApplicationStatus, number> = {
  open: 0,
  accepted: 1,
  rejected: 2,
};

const ApplicationsPage: i.NextPageComponent<Props, Queries> = ({ url, status }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const applications = useSelector((state) => state.applications.list);
  const loading = useSelector((state) => state.applications.loading);
  const [curTab, setCurTab] = useState(status ? TAB[status] : TAB.open);
  const [page, setPage] = useState(0);

  const storage = localStorageHelper.applicationsOverview.get();

  const localApplications = useMemo(() => {
    if (applications.length > 0 && storage) {
      // Map array indices
      const indices = storage.reduce((prev, app, index) => ({
        ...prev,
        [app.applicationUuid]: index,
      }), {} as Record<string, number>);

      // Add "seen" property to application data
      return applications.map((app) => ({
        ...app,
        seen: storage[indices[app.uuid]].seen,
        newComments: storage[indices[app.uuid]].newComments,
      }));
    }

    return [];
  }, [applications, storage]);

  const getStatusStr = (statusId: number): i.ApplicationStatus => {
    let status: i.ApplicationStatus = 'open';

    Object.entries(TAB).forEach(([key, id]) => {
      if (id === statusId) {
        status = key as i.ApplicationStatus;
      }
    });

    return status;
  };

  useEffect(() => {
    if (user.isSignedIn) {
      dispatch(fetchApplications(status));
    }
  }, [user.isSignedIn]);

  useEffect(() => {
    if (user.isSignedIn && page > 0) {
      dispatch(fetchApplications(status, page));
    }
  }, [page]);

  const onTabChange = (statusId: number) => {
    setCurTab(statusId);

    const statusName = getStatusStr(statusId);

    router.replace({
      pathname: router.pathname,
      query: {
        status: statusName,
      },
    },
    undefined,
    { shallow: true });

    dispatch(fetchApplications(statusName));
  };

  const onLoadMore = () => {
    setPage((page) => page + 1);
  };

  if (user.loading) {
    return null;
  }

  if (!user.isSignedIn) {
    redirect();

    return null;
  }

  return (
    <Page
      meta={{
        title: 'Applications',
        description: 'Plan B applications',
      }}
      url={url}
    >
      <ApplicationsContainer>
        <ApplicationsHeading>
          <Heading as="h1">Applications</Heading>

          <Tabs.Container onChange={onTabChange} activeTab={curTab}>
            <Tabs.Tab>
              <CircleIcon />
              Open
            </Tabs.Tab>
            <Tabs.Tab>
              <CheckCircleIcon />
              Accepted
            </Tabs.Tab>
            <Tabs.Tab>
              <NotInterestedIcon />
              Rejected
            </Tabs.Tab>
          </Tabs.Container>
        </ApplicationsHeading>

        <Heading as="h2">{getStatusStr(curTab)} applications</Heading>

        <ApplicationsList>
          {localApplications.map((app) => (
            <ApplicationItem
              key={app.uuid}
              application={app}
              unseen={!app.seen}
              newComments={app.newComments}
            />
          ))}

          {loading && <Loader />}

          {localApplications.length > 0 && (
            <Button onClick={onLoadMore} disabled={loading}>
              Load more
            </Button>
          )}
        </ApplicationsList>

        {!loading && localApplications.length === 0 && (
          <EmptyStateText>
            There are no {getStatusStr(curTab)} applications yet.
          </EmptyStateText>
        )}
      </ApplicationsContainer>
    </Page>
  );
};

ApplicationsPage.defaultProps = {
  status: 'open',
};

ApplicationsPage.getInitialProps = async ({ req, query }) => {
  return {
    url: getUrl(req),
    status: query.status,
  };
};

type Props = {
  status: i.ApplicationStatus;
}

type Queries = {
  status?: i.ApplicationStatus;
}

export default ApplicationsPage;
