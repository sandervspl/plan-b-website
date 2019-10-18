import styled from 'styled-components';
import { ModalInner } from 'common/Modal';
import { InputContainer } from 'common/form/Input/styled';

export const ModalContent = styled(ModalInner)`
  ${InputContainer} {
    margin-top: 32px;
  }
`;
