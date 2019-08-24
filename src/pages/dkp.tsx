import * as i from 'types';
import React, { useEffect, useState } from 'react';
import { Form, Field } from 'react-final-form';
import { sendDkpXml } from 'ducks/dkp';
import { getUrl, validate, api, redirect } from 'services';
import { useFileUpload, useDispatch, useSelector } from 'hooks';
import { Heading, Button, Paragraph, Loader, ErrorText } from 'common';
import { Input } from 'common/form';
import Page from 'modules/Page';
import {
  DkpDashboardContainer, ContentHeader, CharacterFormContainer, CharacterLoadingContainer,
} from 'modules/dkp/styled';
import LinkCharacterModal from 'modules/dkp/LinkCharacterModal';
import CreateCharacterModal from 'modules/dkp/CreateCharacterModal';

const DkpDashboard: i.NextPageComponent = ({ url }) => {
  const dispatch = useDispatch();
  const sending = useSelector((state) => state.dkp.loading);
  const isAdmin = useSelector((state) => state.user.isAdmin);
  const user = useSelector((state) => state.user);

  const [loading, setLoading] = useState(false);
  const [createCharacterRequest, setCreateCharacterRequest] = useState(false);
  const [linkCharacterRequest, setLinkCharacterRequest] = useState(false);
  const [error, setError] = useState('');

  const { ref, uploading, file } = useFileUpload();

  useEffect(() => {
    if (file) {
      dispatch(sendDkpXml(file));
    }
  }, [file]);

  const characterValidate = validate.minMax({ min: 2, max: 12 });

  const onLink = (name: string) => async () => {
    if (characterValidate(name) != null) {
      return;
    }

    setError('');
    setLoading(true);
    setLinkCharacterRequest(false);

    try {
      await api.patch({
        url: api.url.api,
        path: 'user/character',
        body: {
          characterName: name,
          userId: user.data!.id,
        },
      });

      // @TODO Fetch DKP data
    } catch (err) {
      if (err.statusCode === 404) {
        setCreateCharacterRequest(true);
      } else {
        setError('Something went wrong. Try again later.');
      }
    }

    setLoading(false);
  };

  const onCreate = (values: FormState) => async () => {
    setCreateCharacterRequest(false);
    setLoading(true);

    try {
      await api.post({
        url: api.url.api,
        path: 'user/character',
        body: {
          characterName: values.name,
        },
      });

      await api.patch({
        url: api.url.api,
        path: 'user/character',
        body: {
          characterName: values.name,
          userId: user.data!.id,
        },
      });

      // @TODO Fetch DKP data
    } catch (err) {
      setError('Something went wrong. Try again later.');
    }

    setLoading(false);
    setLinkCharacterRequest(false);
  };

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

        {/* @TODO Only show if no character is linked to user */}
        <CharacterFormContainer>
          <Paragraph>
            In order for your DKP to show, we need to connect a character to your account.
            Make sure to spell out your character name correctly before submitting.
          </Paragraph>
          <Paragraph>
            This can NOT be changed!
          </Paragraph>

          <Form<FormState> onSubmit={() => setLinkCharacterRequest(true)}>
            {({ handleSubmit, invalid, values }) => (
              <>
                <form onSubmit={handleSubmit}>
                  {loading ? (
                    <CharacterLoadingContainer>
                      <Paragraph>Linking character to account...</Paragraph>
                      <Loader />
                    </CharacterLoadingContainer>
                  ) : (
                    <>
                      <Field
                        component={Input}
                        name="name"
                        label="Enter character name"
                        required
                        validate={characterValidate}
                      />

                      <Button type="submit" disabled={invalid}>
                        Add character
                      </Button>

                      {error && <ErrorText>{error}</ErrorText>}
                    </>
                  )}

                  <CreateCharacterModal
                    name={values.name}
                    cta={onCreate}
                    isModalOpen={createCharacterRequest}
                    setModalOpen={setCreateCharacterRequest}
                  />

                  <LinkCharacterModal
                    name={values.name}
                    cta={onLink}
                    isModalOpen={linkCharacterRequest}
                    setModalOpen={setLinkCharacterRequest}
                  />
                </form>
              </>
            )}
          </Form>
        </CharacterFormContainer>
      </DkpDashboardContainer>
    </Page>
  );
};

DkpDashboard.getInitialProps = async ({ req }) => {
  return {
    url: getUrl(req),
  };
};

type FormState = {
  name: string;
};

export default DkpDashboard;
