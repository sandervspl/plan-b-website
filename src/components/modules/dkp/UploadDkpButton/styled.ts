import styled from 'styled-components';
import { ErrorText } from 'common';
import { ModalInner } from 'common/Modal';
import { InputContainer } from 'common/form/Input/styled';

export const UploadButtonContainer = styled.div`
  ${ErrorText} {
    text-align: right;
    margin: 8px 0;
  }
`;

export const ModalContent = styled(ModalInner)`
  ${InputContainer} {
    margin: 16px 0 8px;
  }
`;
