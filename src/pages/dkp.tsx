import * as i from 'types';
import React, { useEffect, useState, useCallback } from 'react';
import { Form, Field } from 'react-final-form';
import Modal from 'react-modal';
import { sendDkpXml } from 'ducks/dkp';
import { getUrl, validate, api } from 'services';
import { useFileUpload, useDispatch, useSelector } from 'hooks';
import { Heading, Button, Paragraph, Loader, ErrorText } from 'common';
import { Input } from 'common/form';
import Page from 'modules/Page';
import {
  DkpDashboardContainer, ContentHeader, CharacterFormContainer, CharacterLoadingContainer,
  ModalContent, Buttons,
} from 'modules/dkp/styled';

const DkpDashboard: i.NextPageComponent = ({ url }) => {
  const dispatch = useDispatch();
  const sending = useSelector((state) => state.dkp.loading);
  const isAdmin = useSelector((state) => state.user.isAdmin);
  const userId = useSelector((state) => state.user.data && state.user.data.id);
  const [characterLoading, setCharacterLoading] = useState(false);
  const [error, setError] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);
  const characterValidate = useCallback(validate.minMax({ min: 2, max: 12 }), []);
  const { loading, file, handleFileChange } = useFileUpload();

  useEffect(() => {
    if (file) {
      dispatch(sendDkpXml(file));
    }
  }, [file]);

  const onConfirm = (values: FormState) => async () => {
    if (characterValidate(values.name) != null) {
      return;
    }

    setError('');
    setCharacterLoading(true);

    try {
      await api.methods.patch({
        url: api.url.api,
        path: 'user/character',
        body: {
          characterName: values.name,
          userId: userId,
        },
      });

      // @TODO Fetch DKP data
    } catch (err) {
      setError('Something went wrong. Try again later.');
    }

    setCharacterLoading(false);
    setModalOpen(false);
  };

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
            <Button as="label" htmlFor="file-upload" disabled={loading || sending}>
              Upload DKP Export
            </Button>
          )}
          <input
            id="file-upload"
            type="file"
            accept=".xml,.txt"
            name="dkp-xml"
            onChange={handleFileChange}
          />
        </ContentHeader>

        {characterLoading ? (
          <CharacterLoadingContainer>
            <Paragraph>Linking character to account...</Paragraph>
            <Loader />
          </CharacterLoadingContainer>
        ) : (
          <CharacterFormContainer>
            <Paragraph>
              In order for your DKP to show, we need to connect a character to your account.
              Make sure to spell out your character name correctly before submitting.
            </Paragraph>
            <Paragraph>
              This can NOT be changed!
            </Paragraph>

            <Form<FormState> onSubmit={() => setModalOpen(true)}>
              {({ handleSubmit, invalid, values }) => (
                <>
                  <form onSubmit={handleSubmit}>
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

                    <Modal
                      isOpen={isModalOpen}
                      onRequestClose={() => setModalOpen(false)}
                      contentLabel="Example Modal"
                      className="modal__content"
                      overlayClassName="modal__overlay"
                      closeTimeoutMS={300}
                    >
                      <ModalContent>
                        <Heading as="h2">Are you sure?</Heading>
                        <Paragraph>Please make sure this is the correct name.</Paragraph>
                        <Paragraph>
                        This will permanently link <strong>{values.name}</strong> to your account.
                        </Paragraph>

                        <Buttons>
                          <Button type="button" onClick={() => setModalOpen(false)}>
                            Cancel
                          </Button>
                          <Button type="button" onClick={onConfirm(values)}>
                            Link this character
                          </Button>
                        </Buttons>
                      </ModalContent>
                    </Modal>
                  </form>
                </>
              )}
            </Form>
          </CharacterFormContainer>
        )}
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
