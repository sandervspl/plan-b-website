import React from 'react';
import { Form, Field } from 'react-final-form';
import { sendComment, fetchComments, setStatus } from 'ducks/applications';
import { useDispatch } from 'hooks';
import { Heading, Paragraph, Button } from 'common';
import Modal, { ModalButtons } from 'common/Modal';
import { Input } from 'common/form';
import { validate } from 'services';
import { ModalContent } from './styled';

const RejectModal: React.FC<Props> = ({ isModalOpen, setModalOpen }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values: FormState) => {
    dispatch(sendComment('private', values.comment))
      .then((message) => {
        // if (!message) {
        //   setError('Something went wrong. Try again later.');

        //   return;
        // }

        dispatch(fetchComments('private'));
        dispatch(setStatus('rejected'));
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
