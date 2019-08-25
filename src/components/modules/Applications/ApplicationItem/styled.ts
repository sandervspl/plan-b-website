import styled from 'styled-components';
import { ParagraphStyle, ClassText, ListItem, ListItemInnerCss, ListItemCell } from 'common';
import { CircleImgContainer } from 'common/CircleImg/styled';
import { media } from 'styles';

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
        &:first-child {
          flex-basis: 25px;
          margin-right: 10px;
          width: 25px;
          height: 25px;
        }

        &:nth-child(2) {
          flex-basis: 20%;
        }

        &:nth-child(3) {
          flex-basis: 15%;
        }

        &:nth-child(4) {
          flex-basis: 15%;
        }

        &:nth-child(5) {
          flex-basis: 25%;
        }

        &:nth-child(6) {
          flex-basis: 10%;
        }

        &:last-child {
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

export const SocialContainer = styled.div`
  height: 25px;

  svg {
    height: 25px;
    fill: ${(props) => props.theme.color.secondary};
  }
`;
