import * as i from 'types';
import React, { useEffect } from 'react';
import { sendDkpXml } from 'ducks/dkp';
import { fetchUserCharacter } from 'ducks/user';
import { getUrl, redirect } from 'services';
import { useFileUpload, useDispatch, useSelector } from 'hooks';
import { Heading, Button, Loader } from 'common';
import Page from 'modules/Page';
import { DkpDashboardContainer, ContentHeader, CharacterLoadingContainer } from 'modules/dkp/styled';
import CharacterForm from 'modules/dkp/CharacterForm';

const DkpDashboard: i.NextPageComponent = ({ url }) => {
  const dispatch = useDispatch();
  const sending = useSelector((state) => state.dkp.loading);
  const isAdmin = useSelector((state) => state.user.isAdmin);
  const user = useSelector((state) => state.user);

  const { ref, uploading, file } = useFileUpload();

  useEffect(() => {
    dispatch(fetchUserCharacter());
  }, []);

  useEffect(() => {
    if (file) {
      dispatch(sendDkpXml(file));
    }
  }, [file]);

  // Auth check
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
        title: 'DKP',
        description: 'DKP overview',
      }}
      url={url}
    >
      <DkpDashboardContainer>
        <ContentHeader>
          <Heading as="h1">DKP Dashboard</Heading>

          {isAdmin && (
            <Button as="label" htmlFor="file-upload" disabled={uploading || sending}>
              Upload DKP Export
            </Button>
          )}
          <input
            id="file-upload"
            type="file"
            accept=".xml,.txt"
            name="dkp-xml"
            ref={ref}
          />
        </ContentHeader>

        {user.loadingCharacter ? (
          <CharacterLoadingContainer>
            <Loader />
          </CharacterLoadingContainer>
        ) : !user.character ? (
          <CharacterForm />
        ) : null} {/* @TODO Show DKP data */}
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
