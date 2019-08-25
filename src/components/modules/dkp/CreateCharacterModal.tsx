import React from 'react';
import Modal from 'react-modal';
import { useBodyScrollLock } from 'hooks';
import { Heading, Paragraph, Button } from 'common';
import { ModalButtons } from 'common/Modal';
import { ModalContent } from './styled';

const CreateCharacterModal: React.FC<Props> = ({ isModalOpen, setModalOpen, cta, name }) => {
  const ref = useBodyScrollLock(isModalOpen);

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => setModalOpen(false)}
      className="modal__content"
      overlayClassName="modal__overlay"
      closeTimeoutMS={300}
      ref={ref}
    >
      <ModalContent>
        <Heading as="h2">This character does not exist yet</Heading>
        <Paragraph>
          This can happen if the name you submitted is not spelled correctly, or we forgot to add your character to the database.
        </Paragraph>
        <Paragraph>
          Do you want to create <strong>{name}</strong> and link it to your account?
        </Paragraph>

        <ModalButtons>
          <Button type="button" onClick={() => setModalOpen(false)}>
            Cancel
          </Button>
          <Button type="button" onClick={cta(name)}>
            Create character
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
  name: string;
};

export default CreateCharacterModal;
