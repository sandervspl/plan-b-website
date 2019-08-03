import * as i from 'types';
import React from 'react';
import { getUrl } from 'services';
import ApplicationDetail from './admin/applications/detail';

const PublicApplicationDetail: i.NextPageComponent<Props, Queries> = ({ url, applicationUuid }) => {
  return (
    <ApplicationDetail url={url} applicationUuid={applicationUuid} type="public" />
  );
};

PublicApplicationDetail.getInitialProps = async ({ req, query }) => {
  return {
    url: getUrl(req),
    applicationUuid: query.uuid,
  };
};

export type Props = {
  applicationUuid: string;
};

type Queries = {
  uuid: string;
};

export default PublicApplicationDetail;
