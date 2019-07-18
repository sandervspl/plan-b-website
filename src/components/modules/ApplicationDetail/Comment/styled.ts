import styled from 'styled-components';
import { ParagraphStyle } from 'common';
import { DateContainer } from 'common/DateText/styled';
import { CircleIconContainer } from 'common/CircleIcon/styled';

export const CommentContainer = styled.div`
  display: grid;
  grid-template-columns: 32px 1fr;
  grid-column-gap: 10px;

  ${CircleIconContainer} {
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

  ${DateContainer} {
    display: inline-block;
    margin-left: 10px;
    font-size: 13px;
    color: ${(props) => props.theme.color.secondary.darker};
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
  font-size: 16px;
  color: ${(props) => props.theme.color.tab.inactive};
  text-align: left;
  cursor: pointer;
`;
