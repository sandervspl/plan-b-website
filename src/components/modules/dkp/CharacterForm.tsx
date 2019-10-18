import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { getUserCharacter } from 'ducks/user';
import { validate, api } from 'services';
import { useDispatch } from 'hooks';
import { Paragraph, Loader, Button, ErrorText } from 'common';
import { Input } from 'common/form';
import LinkCharacterModal from 'modules/dkp/LinkCharacterModal';
import CreateCharacterModal from 'modules/dkp/CreateCharacterModal';
import { CharacterFormContainer, CharacterLoadingContainer } from './styled';

const CharacterForm: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [createCharacterRequest, setCreateCharacterRequest] = useState(false);
  const [linkCharacterRequest, setLinkCharacterRequest] = useState(false);
  const [error, setError] = useState('');

  const characterValidate = validate.minMax({ min: 2, max: 12 });

  const onLink = (name: string) => async () => {
    if (characterValidate(name) != null) {
      return;
    }

    setError('');
    setLoading(true);
    setLinkCharacterRequest(false);

    try {
      await linkCharacter(name);

      dispatch(getUserCharacter());
    } catch (err) {
      if (err.statusCode === 404) {
        setCreateCharacterRequest(true);
      } else {
        setError('Something went wrong. Try again later.');
      }
    }

    setLoading(false);
  };

  const onCreate = (name: string) => async () => {
    setCreateCharacterRequest(false);
    setLoading(true);

    try {
      await createCharacter(name);
      await linkCharacter(name);

      dispatch(getUserCharacter());
    } catch (err) {
      setError('Something went wrong. Try again later.');
    }

    setLoading(false);
    setLinkCharacterRequest(false);
  };

  const linkCharacter = async (name: string) => {
    await api.patch({
      url: api.url.api,
      path: 'user/character',
      withAuth: true,
      body: {
        characterName: name,
      },
    });
  };

  const createCharacter = async (name: string) => {
    await api.post({
      url: api.url.api,
      path: 'user/character',
      body: {
        characterName: name,
      },
    });
  };

  return (
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
        )}
      </Form>
    </CharacterFormContainer>
  );
};

export type Props = {

};

type FormState = {
  name: string;
};

export default CharacterForm;
