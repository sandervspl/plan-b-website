import React, { MouseEvent, KeyboardEvent } from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import { useBodyScrollLock } from 'hooks';
import { Heading } from 'common/typography';

const Modal: React.FC<Props> = ({ children, isModalOpen, onRequestClose }) => {
  const ref = useBodyScrollLock(isModalOpen);

  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={onRequestClose}
      className="modal__content"
      overlayClassName="modal__overlay"
      closeTimeoutMS={300}
      ref={ref}
    >
      {children}
    </ReactModal>
  );
};

export type Props = {
  isModalOpen: boolean;
  onRequestClose: (event: (React.MouseEvent | React.KeyboardEvent)) => void;
};

export const ModalInner = styled.div`
  ${Heading} {
    margin-bottom: 16px;
  }
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;

  button {
    &:not(:first-child) {
      margin-left: 16px;
    }

    &:first-child {
      background: none;
    }
  }
`;

export default Modal;
