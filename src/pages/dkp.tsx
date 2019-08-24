import * as i from 'types';
import React, { useEffect } from 'react';
import { sendDkpXml } from 'ducks/dkp';
import { fetchUserCharacter } from 'ducks/user';
import { getUrl, redirect } from 'services';
import { useDispatch, useSelector } from 'hooks';
import { Heading, Loader } from 'common';
import Page from 'modules/Page';
import { DkpDashboardContainer, ContentHeader, CharacterLoadingContainer } from 'modules/dkp/styled';
import CharacterForm from 'modules/dkp/CharacterForm';
import UploadDkpButton from 'modules/dkp/UploadDkpButton';

const DkpDashboard: i.NextPageComponent = ({ url }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUserCharacter());
  }, []);

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

          <UploadDkpButton />
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
