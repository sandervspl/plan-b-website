import styled, { css } from 'styled-components';
import { ParagraphStyle, ClassText, PageContentContainer, Heading, Paragraph } from 'common';
import { DateContainer } from 'common/DateText/styled';
import { CircleIconContainer } from 'common/CircleIcon/styled';

export const ApplicationContainer = styled(PageContentContainer)`
  ${Heading} {
    margin: 0 20px;
  }

  hr {
    margin: 5px 20px 10px;
    border: 1px solid ${(props) => props.theme.color.border.primary.lighter};
  }
`;

export const StatusButton = styled.button`
  ${ParagraphStyle};
  display: inline-flex;
  align-items: center;
  margin-right: 20px;
  padding: 4px 18px;
  font-size: 14px;
  font-weight: bold;
  text-transform: capitalize;
  background-color: ${(props) => props.theme.color.secondary.darker};
  border-radius: 18px;
  border: 0;

  svg {
    margin-right: 5px;
    width: 15px;
    height: 15px;
    fill: ${(props) => props.theme.color.secondary};
  }
`;

export const ApplicationRole = styled.div`
  ${ParagraphStyle};
  display: flex;
  align-items: center;
  font-size: 16px;

  ${CircleIconContainer} {
    margin-right: 5px;
    width: 18px;
    height: 18px;
    border: 1px solid ${(props) => props.theme.color.secondary.darker};
  }
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
`;

export const ApplicationHeader = styled.div`
  padding: 20px;

  ${DateContainer} {
    display: inline-flex;
    font-size: 14px;

    svg {
      display: none;
      width: 16px;
      height: 16px;
    }
  }

  ${ClassText} {
    display: block;
    margin-top: 15px;
    font-size: 20px;

    strong {
      font-weight: bold;
      text-transform: uppercase;
    }
  }
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 40% 1fr;
  grid-row-gap: 3px;
  margin: 0 20px;

  ${Paragraph} {
    display: flex;
    align-items: center;
    font-size: 16px;

    &:nth-child(odd) {
      font-weight: bold;
    }

    figure {
      margin-left: 7px;
      width: 18px;
      height: 18px;
    }
  }
`;

export const EmptyState = styled(Paragraph)`
  margin: 0 20px;
  font-size: 14px;
`;

export const ApplicationSection = styled.section<ApplicationSectionProps>`
  margin-top: 30px;

  ${Heading} {
    ${(props) => props.secondary && css`
      margin-bottom: 13px;
    `}

    font-size: 18px;
  }

  > ${Paragraph} {
    margin: 0 20px;
    font-size: 16px;
  }
`;

type ApplicationSectionProps = {
  secondary?: boolean;
}

export const ProfessionsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 15px;
  margin: 0 20px;
`;
