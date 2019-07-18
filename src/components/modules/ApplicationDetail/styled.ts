import * as i from 'types';
import styled, { css } from 'styled-components';
import tinycolor from 'tinycolor2';
import { media } from 'styles';
import { ParagraphStyle, ClassText, PageContentContainer, Heading, Paragraph } from 'common';
import { DateContainer } from 'common/DateText/styled';
import { CircleIconContainer } from 'common/CircleIcon/styled';

export const ApplicationContainer = styled(PageContentContainer)`
  ${Heading} {
    margin: 0 20px;

    ${media.tablet`
      margin: 0 40px;
    `}
  }

  hr {
    margin: 5px 20px 10px;
    border: 1px solid ${(props) => props.theme.color.border.primary.lighter};

    ${media.tablet`
      margin: 7px 40px 12px;
    `}
  }

  ${media.tablet`
    display: grid;
    grid-template-columns: 70% 1fr;
    
    > div {
      padding-bottom: 100px;
    }
  `}
`;

export const StatusButton = styled.button<StatusButtonProps>`
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

    ${media.tablet`
      width: 30px;
      height: 30px;
    `}
  }

  ${(props) => props.status === 'accepted' && css`
    color: ${(props) => props.theme.color.positive};
    background-color: ${(props) => tinycolor(props.theme.color.positive).brighten(60).toString()};

    svg {
      fill: ${(props) => props.theme.color.positive};
    }
  `}

  ${(props) => props.status === 'rejected' && css`
    color: ${(props) => props.theme.color.negative};
    background-color: ${(props) => tinycolor(props.theme.color.negative).brighten(60).toString()};

    svg {
      fill: ${(props) => props.theme.color.negative};
    }
  `}

  ${media.tablet`
    padding: 3px 25px;
    font-size: 25px;
    border-radius: 100px;
  `}
`;

type StatusButtonProps = {
  status: i.ApplicationStatus;
}

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

    ${media.tablet`
      margin-right: 10px;
      width: 30px;
      height: 30px;
    `}
  }

  ${media.tablet`
    font-size: 25px;
  `}
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

    ${media.tablet`
      font-size: 16px;
    `}
  }

  ${ClassText} {
    display: block;
    margin-top: 15px;
    font-size: 20px;

    strong {
      font-weight: bold;
      text-transform: uppercase;
    }

    ${media.tablet`
      margin-top: 75px;
      font-size: 50px;
      line-height: 50px;
    `}
  }

  ${media.tablet`
    padding: 40px 40px 0;
  `}
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

      ${media.tablet`
        font-size: 18px;
      `}
    }

    figure {
      margin-left: 7px;
      width: 18px;
      height: 18px;

      ${media.tablet`
        width: 20px;
        height: 20px;
      `}
    }
  }

  ${media.tablet`
    grid-template-columns: 30% 1fr;
    margin: 0 40px;
  `}
`;

export const EmptyState = styled(Paragraph)`
  margin: 0 20px;
  font-size: 14px !important;
  color: ${(props) => props.theme.color.secondary.darker};

  ${media.tablet`
    margin: 0 40px;
  `}
`;

export const ApplicationSection = styled.section<ApplicationSectionProps>`
  margin-top: 30px;

  ${Heading} {
    font-size: 18px;

    ${media.tablet`
      font-size: 35px;
    `}

    ${(props) => props.secondary && css`
      margin-bottom: 13px;

      ${media.tablet`
        font-size: 18px;
      `}
    `}
  }

  > ${Paragraph} {
    margin: 0 20px;
    font-size: 16px;

    ${media.tablet`
      margin: 0 40px;
    `}
  }

  ${media.tablet`
    margin-top: 50px;
  `}
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

  ${media.tablet`
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 50px;
    margin: 0 40px;
  `}
`;
