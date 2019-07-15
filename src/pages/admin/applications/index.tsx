import * as i from 'types';
import React, { useState, useEffect } from 'react';
import { getUrl, redirect } from 'services';
import { fetchApplications } from 'ducks/applications';
import { useSelector, useDispatch, useRouter } from 'hooks';
import CircleIcon from 'vectors/circle.svg';
import CheckCircleIcon from 'vectors/check-circle.svg';
import NotInterestedIcon from 'vectors/not-interested.svg';
import { Heading } from 'common';
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

const Applications: i.NextPageComponent<Props, Query> = ({ url, status }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const applications = useSelector((state) => state.applications.data);
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
    if (user.isSignedIn && user.isAdmin) {
      dispatch(fetchApplications(status));
    }
  }, [user]);

  if (user.loading) {
    return null;
  }

  // Not logged in or not admin
  if (!user.data || (user.isSignedIn && !user.isAdmin)) {
    redirect();

    return null;
  }

  const onTabChange = (statusId: number) => () => {
    setCurTab(statusId);

    const statusName = getStatusStr(statusId);

    router.replace(`/admin/applications?status=${statusName}`, undefined, { shallow: true });

    dispatch(fetchApplications(statusName));
  };

  return (
    <Page url={url}>
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

        <ApplicationsList>
          {applications && applications.map((application) => (
            <ApplicationItem application={application} />
          ))}
        </ApplicationsList>
      </ApplicationsContainer>
    </Page>
  );
};

Applications.defaultProps = {
  status: 'open',
};

Applications.getInitialProps = async ({ req, query }) => {
  return {
    url: getUrl(req),
    status: query.status,
  };
};

type Props = {
  url: string;
  status: i.ApplicationStatus;
}

type Query = {
  status?: i.ApplicationStatus;
}

export default Applications;
