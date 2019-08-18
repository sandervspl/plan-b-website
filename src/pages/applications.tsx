import * as i from 'types';
import React from 'react';
import { getUrl } from 'services';
import Applications from './admin/applications';

const PublicApplications: i.NextPageComponent<Props, Queries> = ({ url, status }) => {
  return (
    <Applications url={url} type="public" status={status} />
  );
};

PublicApplications.getInitialProps = async ({ req, query }) => {
  return {
    url: getUrl(req),
    status: query.status,
  };
};

export type Props = {
  status: i.ApplicationStatus;
};

type Queries = {
  status: i.ApplicationStatus;
};

export default PublicApplications;
