import React from 'react';
import Modal from 'react-modal';
import { useBodyScrollLock } from 'hooks';
import { Heading, Paragraph, Button } from 'common';
import { ModalButtons } from 'common/Modal';
import { ModalContent } from './styled';

const LinkCharacterModal: React.FC<Props> = ({ isModalOpen, setModalOpen, cta, name }) => {
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
        <Heading as="h2">Are you sure?</Heading>
        <Paragraph>Please make sure this is the correct name.</Paragraph>
        <Paragraph>
        This will permanently link <strong>{name}</strong> to your account.
        </Paragraph>

        <ModalButtons>
          <Button type="button" onClick={() => setModalOpen(false)}>
            Cancel
          </Button>
          <Button type="button" onClick={cta(name)}>
            Link this character
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

export default LinkCharacterModal;
