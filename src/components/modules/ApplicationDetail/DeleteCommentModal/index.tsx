import React from 'react';
import { Heading, Paragraph, Button } from 'common';
import Modal, { ModalButtons } from 'common/Modal';
import { ModalContent } from '../RejectModal/styled';

const DeleteCommentModal: React.FC<Props> = ({ isModalOpen, setModalOpen, cta }) => {
  return (
    <Modal isOpen={isModalOpen} onRequestClose={() => setModalOpen(false)}>
      <ModalContent>
        <Heading as="h2">Delete comment</Heading>
        <Paragraph>
          Are you sure you want to delete this comment?
        </Paragraph>

        <ModalButtons>
          <Button type="button" onClick={() => setModalOpen(false)}>
            Cancel
          </Button>
          <Button type="submit" onClick={() => cta()}>
            Delete comment
          </Button>
        </ModalButtons>
      </ModalContent>
    </Modal>
  );
};

export type Props = {
  isModalOpen: boolean;
  setModalOpen: Function;
  cta: Function;
};

type FormState = {
  comment: string;
};

export default DeleteCommentModal;
