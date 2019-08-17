import * as i from 'types';
import styled, { css } from 'styled-components';
import tinycolor from 'tinycolor2';
import { media } from 'styles';
import { ParagraphStyle, ClassText, PageContentContainer, Heading, Paragraph } from 'common';
import { DateContainer } from 'common/DateText/styled';
import { CircleImgContainer } from 'common/CircleImg/styled';
import { VotingContainer } from './Voting/styled';

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
    grid-template-columns: 67% 1fr;
    
    > div {
      padding-bottom: 100px;
    }
  `}
`;

export const Status = styled.div<StatusButtonProps>`
  ${ParagraphStyle};
  display: inline-flex;
  align-items: center;
  margin-right: 15px;
  padding: 4px 18px;
  font-size: 14px;
  font-weight: bold;
  text-transform: capitalize;
  background-color: ${(props) => props.theme.color.secondary.darker};
  border-radius: 18px;
  border: 0;

  svg {
    margin-right: 5px;
    width: 17px;
    height: 17px;
    fill: ${(props) => props.theme.color.secondary};

    ${media.tablet`
      width: 20px;
      height: 20px;
      transform: translateY(-1px);
    `}
  }

  ${(props) => props.status === 'accepted' && css`
    color: ${(props) => props.theme.color.positive};
    background-color: ${(props) => tinycolor(props.theme.color.positive).brighten(40).toString()};

    svg {
      fill: ${(props) => props.theme.color.positive};
    }
  `}

  ${(props) => props.status === 'rejected' && css`
    color: ${(props) => props.theme.color.negative};
    background-color: ${(props) => tinycolor(props.theme.color.negative).brighten(40).toString()};

    svg {
      fill: ${(props) => props.theme.color.negative};
    }
  `}

  ${media.tablet`
    padding: 3px 25px;
    margin-right: 20px;
    font-size: 18px;
    border-radius: 100px;
  `}
`;

export const StatusChangeButton = styled.button<StatusButtonProps>`
  appearance: none;
  ${ParagraphStyle};
  display: flex;
  align-items: center;
  border: 0;
  outline: 0;
  background: 0;
  font-size: 16px;
  line-height: 1;
  cursor: pointer;

  svg {
    margin-right: 5px;
    width: 18px;
    height: 18px;
    fill: ${(props) => props.theme.color.secondary};
  }

  ${(props) => props.status === 'accepted' && css`
    color: ${(props) => props.theme.color.positive};

    svg {
      fill: ${(props) => props.theme.color.positive};
    }

    &:hover {
      color: ${(props) => tinycolor(props.theme.color.positive).brighten(10).toString()};

      svg {
        fill: ${(props) => tinycolor(props.theme.color.positive).brighten(10).toString()};
      }
    }
  `}

  ${(props) => props.status === 'rejected' && css`
    color: ${(props) => props.theme.color.negative};

    svg {
      fill: ${(props) => props.theme.color.negative};
    }

    &:hover {
      color: ${(props) => tinycolor(props.theme.color.negative).brighten(10).toString()};

      svg {
        fill: ${(props) => tinycolor(props.theme.color.negative).brighten(10).toString()};
      }
    }
  `}
`;

type StatusButtonProps = {
  status: i.ApplicationStatus;
}

export const ApplicationRole = styled.div`
  ${ParagraphStyle};
  display: flex;
  align-items: center;
  margin: 0 20px;
  font-size: 16px;
  text-transform: capitalize;

  ${CircleImgContainer} {
    margin-right: 8px;
    width: 18px;
    height: 18px;
    border: 1px solid ${(props) => props.theme.color.secondary.darker};

    ${media.tablet`
      width: 25px;
      height: 25px;
    `}
  }

  ${media.tablet`
    margin: 5px 40px 0;
    font-size: 20px;
  `}
`;

export const Top = styled.div`
  display: block;
  margin: 0 20px;

  ${DateContainer} {
    display: inline-block;
    font-size: 14px;
    transform: translateY(-25%);

    svg {
      display: none;
      width: 16px;
      height: 16px;
    }

    ${media.tablet`
      transform: translateY(-30%);
    `}
  }

  ${media.tablet`
    margin: 0 40px;
  `}
`;

export const ApplicationHeader = styled.div<ApplicationHeaderProps>`
  position: relative;
  padding-top: 20px;

  ${(props) => props.withGuildMasterTools && css`
    padding-top: 0;
  `}

  ${ClassText} {
    display: block;
    margin: 15px 20px 0;
    font-size: 20px;

    strong {
      font-weight: bold;
      text-transform: uppercase;
    }

    ${media.tablet`
      margin: 75px 40px 0;
      font-size: 40px;
      line-height: 1;
    `}
  }

  ${media.tablet<ApplicationHeaderProps>`
    padding-top: 40px;

    ${(props) => props.withGuildMasterTools && css`
      padding-top: 0;

      ${VotingContainer} {
        top: 125px;
      }
    `}
  `}
`;

type ApplicationHeaderProps = {
  withGuildMasterTools?: boolean;
}

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 40% 1fr;
  grid-row-gap: 3px;
  margin: 0 20px;

  ${Paragraph} {
    display: flex;
    align-items: center;
    font-size: 16px;
    text-transform: capitalize;

    &:nth-child(odd) {
      font-weight: bold;

      ${media.tablet`
        font-size: 18px;
      `}
    }

    figure {
      margin: 0 8px 0 0;
      width: 18px;
      height: 18px;

      &:not(:first-child) {
        margin-left: 8px;
      }

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

export const ApplicationSection = styled.section<ApplicationSectionProps>`
  margin-top: 50px;

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

export const GuildMasterTools = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
  background-color: ${(props) => props.theme.color.primary.dark};

  ${Heading} {
    margin-bottom: 10px;
  }

  > div {
    display: flex;
    justify-content: center;
  }
`;

export const LockedStatus = styled.div`
  ${ParagraphStyle};
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  line-height: 1;
  font-size: 16px;

  svg {
    margin-right: 8px;
    width: 24px;
    height: 24px;
    fill: ${(props) => props.theme.color.secondary};
    transform: translateY(-1px);
  }

  ${media.tablet`
    margin-bottom: 24px;
    font-size: 18px;
  `}
`;

export const ApplicationContent = styled.div`
  ${media.tablet`
    box-shadow: ${(props) => props.theme.shadow.innerContent};
    z-index: 1;
  `}
`;

export const SocialContainer = styled(ApplicationRole)`
  svg {
    width: 18px;
    height: 18px;
    margin-right: 8px;
    fill: ${(props) => props.theme.color.secondary};

    ${media.tablet`
      width: 25px;
      height: 25px;
    `}
  }
`;
