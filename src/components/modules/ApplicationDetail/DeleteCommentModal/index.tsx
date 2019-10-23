import * as i from 'types';
import React, { useState } from 'react';
import { deleteComment } from 'ducks/applications';
import { useDispatch } from 'hooks';
import { Heading, Paragraph, Button, ErrorText } from 'common';
import Modal, { ModalButtons } from 'common/Modal';
import { ModalContent } from '../RejectModal/styled';

const DeleteCommentModal: React.FC<Props> = ({ isModalOpen, setModalOpen, comment }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  const onDelete = () => {
    setError('');

    dispatch(deleteComment(comment.id))
      .then(() => {
        if (!comment) {
          setError('Something went wrong. Try again later.');

          return;
        }

        setModalOpen(false);
      });
  };

  return (
    <Modal isOpen={isModalOpen} onRequestClose={() => setModalOpen(false)}>
      <ModalContent>
        <Heading as="h2">Delete comment</Heading>
        <Paragraph>
          Are you sure you want to delete this comment?
        </Paragraph>

        {error && <ErrorText>{error}</ErrorText>}

        <ModalButtons>
          <Button type="button" onClick={() => setModalOpen(false)}>
            Cancel
          </Button>
          <Button type="submit" onClick={onDelete}>
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
  comment: i.Comment;
};

export default DeleteCommentModal;
