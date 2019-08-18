import * as i from 'types';
import React, { useState, useEffect } from 'react';
import { getUrl, redirect } from 'services';
import { fetchApplications } from 'ducks/applications';
import { useSelector, useDispatch, useRouter } from 'hooks';
import CircleIcon from 'vectors/circle.svg';
import CheckCircleIcon from 'vectors/check-circle.svg';
import NotInterestedIcon from 'vectors/not-interested.svg';
import { Heading, Loader, EmptyStateText } from 'common';
import Page from 'modules/Page';
import ApplicationItem from 'modules/Applications/ApplicationItem';
import {
  ApplicationsHeading, ApplicationsContainer, TabsContainer, Tabs, ActiveTabLine, Tab, ApplicationsList,
} from 'modules/Applications/styled';

const TAB: Record<i.ApplicationStatus, number> = {
  open: 0,
  accepted: 1,
  rejected: 2,
};

const ApplicationsPage: i.NextPageComponent<Props, Query> = ({ url, status, type }) => {
  const isPublic = type === 'public';
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const applications = useSelector((state) => state.applications.list);
  const loading = useSelector((state) => state.applications.loading);
  const [curTab, setCurTab] = useState(status ? TAB[status] : TAB.open);

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
    if (!isPublic && !user.isAdmin) {
      return;
    }

    dispatch(fetchApplications(status, type));
  }, [user]);

  if (user.loading) {
    return null;
  }

  // public, not signed in / private, not admin
  if ((isPublic && !user.isSignedIn) || (!isPublic && !user.isAdmin)) {
    redirect();

    return null;
  }

  const onTabChange = (statusId: number) => () => {
    setCurTab(statusId);

    const statusName = getStatusStr(statusId);
    const baseUrl = isPublic ? '/applications' : '/admin/applications';

    router.replace(`${baseUrl}?status=${statusName}`, undefined, { shallow: true });

    dispatch(fetchApplications(statusName, type));
  };

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

          <TabsContainer>
            <Tabs>
              <Tab isactive={curTab === TAB.open} onClick={onTabChange(TAB.open)}>
                <CircleIcon />
                Open
              </Tab>
              <Tab isactive={curTab === TAB.accepted} onClick={onTabChange(TAB.accepted)}>
                <CheckCircleIcon />
                Accepted
              </Tab>
              <Tab isactive={curTab === TAB.rejected} onClick={onTabChange(TAB.rejected)}>
                <NotInterestedIcon />
                Rejected
              </Tab>
            </Tabs>
            <ActiveTabLine activeId={curTab} />
          </TabsContainer>
        </ApplicationsHeading>

        <Heading as="h2">{getStatusStr(curTab)} applications</Heading>

        {loading ? (
          <Loader />
        ) : applications && applications.length > 0 ? (
          <ApplicationsList>
            {applications.map((application) => (
              <ApplicationItem key={application.id} application={application} />
            ))}
          </ApplicationsList>
        ) : (
          <EmptyStateText>There are no {getStatusStr(curTab)} applications yet.</EmptyStateText>
        )}

      </ApplicationsContainer>
    </Page>
  );
};

ApplicationsPage.defaultProps = {
  status: 'open',
  type: 'private',
};

ApplicationsPage.getInitialProps = async ({ req, query }) => {
  return {
    url: getUrl(req),
    status: query.status,
  };
};

type Props = {
  status: i.ApplicationStatus;
  type: i.ViewableType;
}

type Query = {
  status?: i.ApplicationStatus;
}

export default ApplicationsPage;
