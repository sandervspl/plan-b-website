import styled, { css } from 'styled-components';
import ReactToolTip from 'react-tooltip';
import { sizes, media } from 'styles';
import { RecruitmentContainerInner, QuestionContent } from '../styled';

export const RaidQuestionContainer = styled(RecruitmentContainerInner)`
  @media (max-width: ${sizes.tablet}px) {
    ${QuestionContent} {
      top: 75px;
      height: calc(100% - 100px);
    }
  }
`;

export const RaidList = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;

  ${media.tablet`
    position: absolute;
    top: 115px;
    right: -35px;
    width: 820px;

    + button {
      position: absolute;
      bottom: 0;
    }
  `}
`;

export const RaidImage = styled.figure<RaidImageProps>`
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  opacity: .45;
  will-change: opacity;
  transition: opacity 200ms ease-in-out;

  ${media.tablet`
    border-radius: 10px;
  `}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1);
    will-change: transform;
    transition: transform 200ms ease-in-out;
  }

  ${(props) => props.selected && css`
    opacity: 1 !important;
    border: 1px solid ${(props) => props.theme.color.secondary};
  `}
`;

type RaidImageProps = {
  selected?: boolean;
}

export const RaidItem = styled.label`
  display: flex;
  flex: 1 1 48%;
  justify-content: center;
  margin-bottom: 10px;
  height: 65px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid transparent;

  &:nth-child(odd) {
    margin-right: 10px;
  }

  &:last-child {
    margin-right: 0;
  }

  ${media.tablet`
    flex-basis: auto;
    margin-right: 10px;
    margin-bottom: 0;
    border-radius: 10px;
  `}

  &:hover {
    ${RaidImage} {
      opacity: .7;
      transition: opacity 100ms ease-in-out;

      img {
        transform: scale(1.02);
      }
    }
  }

  &:active {
    transform: scale(.98);
  }

  input {
    display: none;
  }
`;

export const RaidRow = styled.div<RaidRowProps>`
  display: flex;
  width: 780px;

  ${(props) => props.row === 0 && css`
    align-items: flex-end;
    margin-bottom: 10px;

    ${RaidItem} {
      &:nth-child(1) {
        width: 214px;
        height: 214px;
      }

      &:nth-child(2) {
        width: 176px;
        height: 176px;
      }

      &:nth-child(3) {
        width: 370px;
        height: 176px;
      }
    }
  `}

  ${(props) => props.row === 1 && css`
    align-items: flex-start;
    transform: translateX(35px);

    ${RaidItem} {
      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3) {
        width: 176px;
        height: 176px;
      }

      &:nth-child(4) {
        width: 214px;
        height: 214px;
      }
    }
  `}
`;

type RaidRowProps = {
  row: number;
}

export const RaidTooltip = styled(ReactToolTip)`
  && {
    font-family: ${(props) => props.theme.font.primary};
    font-size: 16px;
    color: ${(props) => props.theme.color.secondary};
    text-transform: capitalize;
  }
`;
