import React from 'react';
import { Heading, Paragraph, Button } from 'common';
import Modal, { ModalButtons } from 'common/Modal';
import { ModalContent } from './styled';

const CreateCharacterModal: React.FC<Props> = ({ isModalOpen, setModalOpen, cta, name }) => {
  return (
    <Modal isOpen={isModalOpen} onRequestClose={() => setModalOpen(false)}>
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
