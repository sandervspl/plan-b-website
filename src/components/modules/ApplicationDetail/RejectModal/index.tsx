import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { Heading, Paragraph, Button } from 'common';
import Modal, { ModalButtons, ModalInner } from 'common/Modal';

const RejectModal: React.FC<Props> = ({ isModalOpen, setModalOpen, cta }) => {
  const [comment, setComment] = useState('');

  return (
    <Modal isOpen={isModalOpen} onRequestClose={() => setModalOpen(false)}>
      <ModalInner>
        <Heading as="h2">Are you sure you want to reject?</Heading>
        <Paragraph>
        Please state the reason for rejecting this application.&nbsp;
        This comment will be added to the <strong>officers discussion</strong>.
        </Paragraph>

        <ModalButtons>
          <Button type="button" onClick={() => setModalOpen(false)}>
          Cancel
          </Button>
          <Button type="button" onClick={() => cta()} disabled={comment.length <= 0}>
          Reject Application
          </Button>
        </ModalButtons>
      </ModalInner>
    </Modal>
  );
};

export type Props = {
  isModalOpen: boolean;
  setModalOpen: Function;
  cta: Function;
};

export default RejectModal;
