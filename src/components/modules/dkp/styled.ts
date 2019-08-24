import styled from 'styled-components';
import { media } from 'styles';
import { PageContentContainer, Heading, Paragraph, ErrorText } from 'common';
import { ButtonContainer } from 'common/Button/styled';
import { InputContainer } from 'common/form/Input/styled';

export const DkpDashboardContainer = styled(PageContentContainer)`
  padding: 24px;
`;

export const ContentHeader = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.color.tab.inactive};

  ${Heading} {
    padding-bottom: 8px;
  }

  ${ButtonContainer}, input[type="file"] {
    display: none;
  }

  ${media.tablet`
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${ButtonContainer} {
      display: block;
    }
  `}
`;

export const CharacterFormContainer = styled.div`
  padding: 32px 0;

  ${Paragraph} {
    &:nth-child(2) {
      margin-top: 8px;
      font-weight: bold;
    }

    ${media.tablet`
      width: 75%;
    `}
  }

  > form {
    margin-top: 32px;

    ${InputContainer} {
      margin-bottom: 0;
    }

    button {
      margin-top: 16px;
    }
  }

  ${ErrorText} {
    margin-top: 16px;
    font-size: 18px !important;
  }
`;

export const CharacterLoadingContainer = styled.div`
  margin-top: 16px;

  ${Paragraph} {
    margin-bottom: 16px;
  }
`;

export const ModalContent = styled.div`
  ${Heading} {
    margin-bottom: 16px;
  }

  strong {
    color: ${(props) => props.theme.color.primary.dark};
  }
`;

export const Buttons = styled.div`
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

export const UploadButtonContainer = styled.div`
  ${ErrorText} {
    text-align: right;
    margin: 8px 0;
  }
`;
