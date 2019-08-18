import styled from 'styled-components';
import { media } from 'styles';
import { PageContentContainer, Heading } from 'common';
import { ButtonContainer } from 'common/Button/styled';

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
