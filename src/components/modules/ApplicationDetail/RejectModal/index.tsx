import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { sendComment, setStatus, actions as applicationActions } from 'ducks/applications';
import { useDispatch } from 'hooks';
import { Heading, Paragraph, Button, ErrorText } from 'common';
import Modal, { ModalButtons } from 'common/Modal';
import { Input } from 'common/form';
import { validate } from 'services';
import { ModalContent } from './styled';

const RejectModal: React.FC<Props> = ({ isModalOpen, setModalOpen }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  const handleSubmit = (values: FormState) => {
    setError('');

    dispatch(sendComment('private', values.comment))
      .then((comment) => {
        if (!comment) {
          setError('Something went wrong. Try again later.');

          return;
        }

        dispatch(setStatus('rejected'));
        dispatch(applicationActions.setCommentsType('private'));
        setModalOpen(false);
      });
  };

  return (
    <Modal isOpen={isModalOpen} onRequestClose={() => setModalOpen(false)}>
      <ModalContent>
        <Heading as="h2">Before you reject this application</Heading>
        <Paragraph>
          Please state the reason for rejecting this application.&nbsp;
          This comment will be added to the <strong>officers discussion</strong>.
        </Paragraph>

        <Form<FormState> onSubmit={handleSubmit}>
          {({ handleSubmit, invalid }) => (
            <form onSubmit={handleSubmit}>
              <Field
                component={Input}
                name="comment"
                label="Enter comment"
                required
                validate={validate.required}
              />
              {error && <ErrorText>{error}</ErrorText>}
              <ModalButtons>
                <Button type="button" onClick={() => setModalOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" disabled={invalid}>
                  Reject Application
                </Button>
              </ModalButtons>
            </form>
          )}
        </Form>
      </ModalContent>
    </Modal>
  );
};

export type Props = {
  isModalOpen: boolean;
  setModalOpen: Function;
};

type FormState = {
  comment: string;
};

export default RejectModal;
