import React, { useEffect, useState, useRef } from 'react';
import { Form, Field } from 'react-final-form';
import { sendDkpXml, getGuildAverageDkp } from 'ducks/dkp';
import { getUserCharacter } from 'ducks/user';
import { validate } from 'services';
import { useSelector, useFileUpload, useDispatch } from 'hooks';
import { Button, ErrorText, Heading, Paragraph } from 'common';
import Modal, { ModalButtons } from 'common/Modal';
import { Input } from 'common/form';
import { UploadButtonContainer, ModalContent } from './styled';

const UploadDkpButton: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const sending = useSelector((state) => state.dkp.loading);
  const error = useSelector((state) => state.dkp.error);
  const isAdmin = useSelector((state) => state.user.isAdmin);
  const [isModalOpen, setModalOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { ref, uploading, file } = useFileUpload();

  useEffect(() => {
    if (file) {
      setModalOpen(true);

      // @TODO Fix: inputRef is never set
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  }, [file]);

  const uploadDkp = (values: FormState) => {
    if (!file) {
      return;
    }

    dispatch(sendDkpXml(file, values.name)).then(() => {
      dispatch(getUserCharacter());
      dispatch(getGuildAverageDkp());
      setModalOpen(false);
    });
  };

  if (!isAdmin) {
    return null;
  }

  return (
    <UploadButtonContainer>
      <Button as="label" htmlFor="file-upload" disabled={uploading || sending}>
        Upload DKP Export
      </Button>
      {typeof error === 'string' && (
        <ErrorText>{error}</ErrorText>
      )}
      <input
        id="file-upload"
        type="file"
        accept=".xml,.txt"
        name="dkp-xml"
        ref={ref}
      />

      <Modal isModalOpen={isModalOpen} onRequestClose={() => setModalOpen(false)}>
        <ModalContent>
          <Heading as="h2">Event</Heading>
          <Paragraph>What event is associated with this upload?</Paragraph>

          <Form<FormState> onSubmit={uploadDkp}>
            {({ handleSubmit, invalid }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  component={Input}
                  name="name"
                  label="Event name"
                  placeholder="Molten Core"
                  required
                  validate={validate.required}
                  ref={inputRef}
                />

                <ModalButtons>
                  <Button type="button" onClick={() => setModalOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={invalid}>
                    Upload DKP
                  </Button>
                </ModalButtons>
              </form>
            )}
          </Form>
        </ModalContent>
      </Modal>
    </UploadButtonContainer>
  );
};

export type Props = {

};

type FormState = {
  name: string;
};

export default UploadDkpButton;
