import styled, { css } from 'styled-components';
import { ParagraphStyle, ClassText, ListItem, ListItemInnerCss, ListItemCell } from 'common';
import { CircleImgContainer } from 'common/CircleImg/styled';
import { media } from 'styles';

export const Notification = styled.div<NotificationProps>`
  width: 5px;
  height: 5px;
  border-radius: 100%;
  background-color: transparent;

  ${(props) => props.active && css`
    background-color: ${(props) => props.theme.color.primary};
  `}
`;

export type NotificationProps = {
  active?: boolean;
}

export const RoleContainer = styled.div`
  display: flex;
  align-items: center;

  ${CircleImgContainer} {
    width: 13px;
    height: 13px;
    margin-right: 5px;

    ${media.tablet`
      width: 25px;
      height: 25px;
    `}
  }

  ${media.tablet`
    display: none;
  `}
`;

export const ApplicationItemContainer = styled(ListItem)`
  a {
    ${ListItemInnerCss};
    grid-template-columns: 15% 50% 15% 20%;
    align-items: center;

    > ${CircleImgContainer} {
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
        &:nth-child(1) {
          width: 7px;
          margin-right: 16px;
          height: 7px;
        }

        &:nth-child(2) {
          flex-basis: 25px;
          margin-right: 10px;
          width: 25px;
          height: 25px;
        }

        &:nth-child(3) {
          flex-basis: 30%;
        }

        &:nth-child(4) {
          flex-basis: 15%;
        }

        &:nth-child(5) {
          flex-basis: 15%;
        }

        &:nth-child(6) {
          flex-basis: 25%;
        }

        &:nth-child(7) {
          flex-basis: calc(15% - 35px);
          text-align: right;
        }
      }
    `}
  }

  ${ListItemCell} {
    display: none;

    ${media.tablet`
      display: block;
    `}
  }
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
  font-size: 15px;

  span {
    svg {
      margin-right: 5px;
      width: 20px;
      height: 20px;
      fill: ${(props) => props.theme.color.secondary};
    }

    ${media.tablet`
      display: flex;
      align-items: center;

      &:first-child {
        width: 50px;
      }
    `}
  }

  ${Notification} {
    margin-left: 8px;
  }

  ${media.tablet`
    margin: 0;
  `}
`;

export const SocialContainer = styled.div`
  height: 25px;

  svg {
    height: 25px;
    fill: ${(props) => props.theme.color.secondary};
  }
`;
