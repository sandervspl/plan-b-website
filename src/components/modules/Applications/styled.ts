import styled from 'styled-components';
import { media } from 'styles';
import { Heading, PageContentContainer, Loader } from 'common';
import { ButtonContainer } from 'common/Button/styled';

export const ApplicationsContainer = styled(PageContentContainer)`
  padding-bottom: 20px;

  h2 {
    padding: 16px 20px 8px;
    text-transform: capitalize;
    font-size: 18px;

    ${media.tablet`
      padding: 32px 40px 16px;
    `}
  }

  ${Loader} {
    display: block;
    margin: 0 auto;
  }

  ${media.tablet`
    min-height: 100vh;
  `}
`;

export const ApplicationsHeading = styled.div`
  background-color: ${(props) => props.theme.color.background};
  border-bottom: 1px solid ${(props) => props.theme.color.tab.inactive};

  ${Heading} {
    padding: 24px 20px 20px;
  }

  ${media.tablet`
    margin: 0 40px;
    display: flex;
    background: none;

    ${Heading} {
      padding: 40px 0 16px;
      font-size: 35px;
    }
  `}
`;

export const ApplicationsList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0 20px;
  list-style: none;

  ${ButtonContainer} {
    align-self: center;
    margin-top: 16px;
  }

  ${media.tablet`
    padding: 0 40px;
  `}
`;
