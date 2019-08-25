import styled from 'styled-components';
import { media } from 'styles';
import { PageContentContainer, Heading, Paragraph, ErrorText } from 'common';
import { ButtonContainer } from 'common/Button/styled';
import { InputContainer } from 'common/form/Input/styled';
import { ModalInner } from 'common/Modal';

export const ContentHeader = styled.div`
  margin: 24px 24px 0;
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
    margin: 40px 40px 32px;

    ${ButtonContainer} {
      display: block;
    }
  `}
`;

export const CharacterFormContainer = styled.div`
  padding: 32px 24px;

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

  ${media.tablet`
    padding: 0 40px 32px;
  `}
`;

export const CharacterLoadingContainer = styled.div`
  margin-top: 16px;

  ${Paragraph} {
    margin-bottom: 16px;
  }
`;

export const ModalContent = styled(ModalInner)`
  strong {
    color: ${(props) => props.theme.color.primary.dark};
  }
`;

export const DkpDashboardContainer = styled(PageContentContainer)`
  padding-bottom: 24px;

  > ${CharacterLoadingContainer} {
    width: 100%;

    svg {
      display: block;
      margin: 0 auto;
    }
  }
`;
