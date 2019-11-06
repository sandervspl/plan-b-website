import styled from 'styled-components';
import { ParagraphStyle } from 'common';
import { CircleImgContainer } from 'common/CircleImg/styled';

export const CommentContainer = styled.div`
  display: grid;
  grid-template-columns: 32px 1fr;
  grid-column-gap: 10px;

  ${CircleImgContainer} {
    width: 32px;
    height: 32px;
  }
`;

export const CommentText = styled.div`
  ${ParagraphStyle};
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;

export const CommentInfo = styled.div`
  ${ParagraphStyle};
  margin-top: 5px;
  font-size: 13px;
  color: ${(props) => props.theme.color.secondary.darker};

  > *:nth-child(n+2) {
    display: inline-block;
    margin-left: 10px;
    font-size: 13px;
  }

  > *:nth-child(2) {
    color: ${(props) => props.theme.color.secondary.darker};
  }

  > svg {
    height: 13px;
    fill: ${(props) => props.theme.color.secondary.darker};
    transform: translateY(2px);
  }

  > span:first-child {
    font-weight: 700;
  }
`;

export const ReadMoreButton = styled.button`
  appearance: none;
  ${ParagraphStyle};
  margin-top: 3px;
  padding: 0;
  background: none;
  border: 0;
  outline: 0;
  font-size: 15px;
  color: ${(props) => props.theme.color.tab.inactive};
  text-align: left;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  ${ParagraphStyle};
  appearance: none;
  border: 0;
  background: none;
  box-shadow: 0;
  color: ${(props) => props.theme.color.negative};
  cursor: pointer;
`;
