import * as i from 'types';
import React, { useEffect } from 'react';
import { sendDkpXml } from 'ducks/dkp';
import { getUrl } from 'services';
import { useFileUpload, useDispatch, useSelector } from 'hooks';
import { Heading, Button } from 'common';
import Page from 'modules/Page';
import { DkpDashboardContainer, ContentHeader } from 'modules/dkp/styled';

const DkpDashboard: i.NextPageComponent = ({ url }) => {
  const dispatch = useDispatch();
  const { loading, file, handleFileChange } = useFileUpload();
  const sending = useSelector((state) => state.dkp.loading);

  useEffect(() => {
    if (file) {
      dispatch(sendDkpXml(file));
    }
  }, [file]);

  return (
    <Page
      meta={{
        title: 'DKP',
        description: 'DKP overview',
      }}
      url={url}
    >
      <DkpDashboardContainer>
        <ContentHeader>
          <Heading as="h1">DKP Dashboard</Heading>

          <Button as="label" htmlFor="file-upload" disabled={loading || sending}>
            Upload DKP XML
          </Button>
          <input
            id="file-upload"
            type="file"
            accept=".xml,.txt"
            name="dkp-xml"
            onChange={handleFileChange}
          />
        </ContentHeader>
      </DkpDashboardContainer>
    </Page>
  );
};

DkpDashboard.getInitialProps = async ({ req }) => {
  return {
    url: getUrl(req),
  };
};

export default DkpDashboard;
