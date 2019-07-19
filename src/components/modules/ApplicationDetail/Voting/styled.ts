import * as i from 'types';
import styled, { css } from 'styled-components';
import tinycolor from 'tinycolor2';
import { ParagraphStyle, CircleImg } from 'common';
import { media } from 'styles';
import { ProgressIndicator, ProgressBarContainer } from 'common/ProgressBar/styled';

export const VotingContainer = styled.div<VotingContainerProps>`
  display: flex;
  margin-top: 20px;
  
  ${(props) => !props.hasVoted && css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  `}

  ${media.tablet`
    position: absolute;
    top: 25px;
    right: 40px;
  `}
`;

type VotingContainerProps = {
  hasVoted?: boolean;
}

export const Button = styled.button<ButtonProps>`
  appearance: none;
  ${ParagraphStyle};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  width: 100%;
  font-size: 16px;
  line-height: 1;
  border: 0;
  outline: 0;
  border-radius: 3px;
  background-color: ${(props) => props.theme.color.negative};
  cursor: pointer;
  transition: .2s linear background-color;

  &:hover {
    background-color: ${(props) => tinycolor(props.theme.color.negative).darken(10).toString()};
  }
  
  ${(props) => props.status === 'accepted' && css`
    background-color: ${(props) => props.theme.color.positive};

    &:hover {
      background-color: ${(props) => tinycolor(props.theme.color.positive).darken(10).toString()};
    }
  `}

  svg {
    margin-right: 6px;
    width: 18px;
    height: 18px;
    fill: ${(props) => props.theme.color.secondary};
  }

  ${media.tablet`
    width: 130px;
  `}
`;

type ButtonProps = {
  status: i.ApplicationStatus;
}

export const ResultContainer = styled.div<ResultContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${ProgressBarContainer} {
    margin-top: 15px;

    ${media.tablet`
      margin-left: auto;
      width: 200px;
    `}
  }

  ${ProgressIndicator} {
    background-color: ${(props) => props.isNegativeVoted ? props.theme.color.negative : props.theme.color.positive};
  }
`;

type ResultContainerProps = {
  isNegativeVoted?: boolean;
}

export const Results = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${media.tablet`
    display: flex;
    justify-content: flex-end;
  `}
`;

export const Result = styled.div`
  ${ParagraphStyle};
  display: flex;
  align-items: center;
`;

export const AvatarRow = styled.div`
  display: flex;
`;

export const Avatar = styled(CircleImg)<AvatarProps>`
  transform: translateX(${(props) => (0 + props.num * 15) * -1}px);
  margin: 0;
  width: 24px;
  height: 24px;
  border: 2px solid ${(props) => props.theme.color.background.content};

  ${media.tablet`
    width: 28px;
    height: 28px;
  `}
`;

type AvatarProps = {
  num: number;
}

export const ResultText = styled.span<ResultTextProps>`
  font-size: 12px;
  white-space: nowrap;
  
  ${(props) => props.votes > 0 && css<ResultTextProps>`
    transform: translateX(${(props) => ((props.votes * 15) * - 1) + 3}px);
  `}

  ${(props) => props.votedThis && css`
    font-weight: bold;
  `}

  svg {
    width: 12px;
    height: 12px;
    fill: ${(props) => props.theme.color.secondary};
    transform: translateY(1px);
  }

  ${media.tablet<ResultTextProps>`
    font-size: 14px;

    ${(props) => props.votes < 2 && props.canMargin && css`
      margin-right: 15px;
    `}
  `}
`;

type ResultTextProps = {
  votes: number;
  votedThis?: boolean;
  canMargin?: boolean;
}

export const VotedText = styled.div`
  ${ParagraphStyle};
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 14px;

  svg {
    margin-right: 2px;
    width: 16px;
    height: 16px;
    fill: ${(props) => props.theme.color.secondary};
    transform: translateY(-1px);
  }
`;
