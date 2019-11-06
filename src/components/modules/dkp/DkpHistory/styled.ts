import styled, { css } from 'styled-components';
import { media } from 'styles';
import {
  ListItem, ListItemInnerCss, Heading, ParagraphStyle, ListItemCell, EmptyStateText,
} from 'common';
import { DateContainer } from 'common/DateText/styled';

export const DkpHistoryContainer = styled.div`
  margin-top: 32px;

  ${Heading},
  ${EmptyStateText} {
    margin-left: 24px;
    margin-bottom: 8px;

    ${media.tablet`
      margin-left: 16px;
    `}
  }
`;

export const DkpHistoryItem = styled(ListItem)`
  ${ListItemInnerCss};
  display: block;
  margin-bottom: 8px;
  padding: 8px 24px;

  ${ListItemCell} {
    ${DateContainer} {
      margin-bottom: 8px;
      font-size: 16px;

      svg {
        height: 16px;
      }

      ${media.tablet`
        margin: 0;
      `};
    }

    &:first-child {
      margin-bottom: 8px;
      font-weight: bold;
    }

    &:nth-child(3) {
      display: inline-block;

      &::before {
        content: 'Gained ';
      }
    }

    &:nth-child(4) {
      display: inline-block;
      margin-left: 32px;
 
      &::before {
        content: 'Spent ';
      }
    }

    &:nth-child(5) {
      &::before {
        content: 'Total: ';
      }

      &::after {
        content: ' DKP';
      }
    }

    &:nth-child(6) {
      margin-top: 8px;
    }

    ${media.tablet`
      &:nth-child(n) {
        margin: 0;

        &::before,
        &::after {
          display: none;
        }
      }
    `}
  }

  ${media.tablet`
    display: grid;
    grid-template-columns: 20% 20% 10% 10% 20% 20%;
    padding: 8px 16px;
  `}
`;

export const DkpHistoryList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ListHeadingItem = styled.li`
  ${ParagraphStyle};
  color: ${(props) => props.theme.color.secondary.darker};
  font-size: 16px;

  ${media.tablet`
    display: block;
  `}
`;

export const ListHeading = styled(DkpHistoryList)`
  display: none;
  margin: 16px 0 8px;
  padding: 0 24px;
  width: 100%;

  ${media.tablet`
    display: grid;
    grid-template-columns: 20% 20% 10% 10% 20% 20%;
    padding: 0 16px;
  `}
`;

export const DkpChangeText = styled(ListItemCell)<DkpChangeTextProps>`
  color: ${(props) => props.theme.color.neutral};

  ${(props) => props.positive && css`
    color: ${(props) => props.theme.color.positive};
  `}

  ${(props) => props.negative && css`
    color: ${(props) => props.theme.color.negative};
  `}
`;

type DkpChangeTextProps = {
  positive?: boolean;
  negative?: boolean;
}
