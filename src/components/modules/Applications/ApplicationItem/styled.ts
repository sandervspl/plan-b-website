import styled from 'styled-components';
import { ParagraphStyle, ClassText, Paragraph } from 'common';
import { CircleIconContainer } from 'common/CircleIcon/styled';
import { media } from 'styles';

export const RoleContainer = styled.div`
  display: flex;
  align-items: center;

  ${CircleIconContainer} {
    width: 13px;
    height: 13px;
    margin-right: 5px;

    ${media.tablet`
      width: 30px;
      height: 30px;
    `}
  }

  ${media.tablet`
    display: none;
  `}
`;

export const MiscInfo = styled(Paragraph)`
  display: none;
  font-size: 16px;

  ${media.tablet`
    display: block;
  `}
`;

export const ApplicationItemContainer = styled.li`
  margin-bottom: 5px;
  width: 100%;
  background-color: ${(props) => props.theme.color.background};
  border: 1px solid ${(props) => props.theme.color.border.primary};

  a {
    ${ParagraphStyle};
    display: flex;
    align-items: center;
    padding: 10px 15px;
    width: 100%;

    > ${CircleIconContainer} {
      width: 30px;
      height: 30px;

      ${media.tablet`
        margin: 0;
      `}
    }

    > ${RoleContainer} {
      display: none;
    }

    ${media.tablet`
      > ${RoleContainer} {
        display: flex;
      }

      > * {
        &:first-child {
          flex-basis: 30px;
          margin-right: 15px;
        }

        &:nth-child(2) {
          flex-basis: 20%;
        }

        &:nth-child(3) {
          flex-basis: 25%;
        }

        &:nth-child(4) {
          flex-basis: 25%;
        }

        &:nth-child(5) {
          flex-basis: 10%;
        }

        &:last-child {
          flex-basis: calc(20% - 45px);
          text-align: right;
        }
      }
    `}
  }

  ${media.tablet`
    margin-bottom: 10px;
  `}
`;

export const RoleText = styled.span`
  font-size: 13px;
  color: ${(props) => props.theme.color.secondary.darker};

  ${media.tablet`
    font-size: 16px;
    color: ${(props) => props.theme.color.secondary};
  `}
`;

export const CharacterInfo = styled.div`
  display: flex;
  flex-direction: column;

  ${ClassText} {
    font-size: 16px;
    line-height: 18px;
    font-weight: bold;
  }
`;

export const CommentsContainer = styled.div`
  ${ParagraphStyle};
  display: flex;
  align-items: center;
  margin-left: auto;
  font-size: 13px;

  svg {
    margin-right: 5px;
    width: 20px;
    height: 20px;
    fill: ${(props) => props.theme.color.secondary};
  }

  ${media.tablet`
    margin: 0;
  `}
`;
