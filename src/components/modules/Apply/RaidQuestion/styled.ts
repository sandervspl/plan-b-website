import styled, { css } from 'styled-components';
import ReactToolTip from 'react-tooltip';

export const RaidList = styled.div`
  display: flex;
  position: absolute;
  top: 115px;
  right: -35px;
  width: 820px;
  justify-content: space-between;
  flex-flow: wrap;
`;

export const RaidImage = styled.figure<RaidImageProps>`
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  opacity: .45;
  will-change: opacity;
  transition: opacity 200ms ease-in-out;

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
  `}
`;

type RaidImageProps = {
  selected?: boolean;
}

export const RaidItem = styled.label`
  display: flex;
  justify-content: center;
  margin-right: 10px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid transparent;

  &:hover {
    ${RaidImage} {
      opacity: .7;
      transition: opacity 100ms ease-in-out;

      img {
        transform: scale(1.02);
      }
    }
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
    color: ${(props) => props.theme.color.primary};
    text-transform: capitalize;
  }
`;
