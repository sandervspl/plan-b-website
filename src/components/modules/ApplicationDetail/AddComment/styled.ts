import styled, { css } from 'styled-components';
import { ParagraphStyle } from 'common';
import { CircleIconContainer } from 'common/CircleIcon/styled';
import { media } from 'styles';

export const AddCommentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const User = styled.div`
  ${ParagraphStyle};
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: ${(props) => props.theme.color.tab.inactive};

  ${CircleIconContainer} {
    width: 32px;
    height: 32px;
  }
`;

export const CommentInput = styled.textarea<CommentInputProps>`
  ${ParagraphStyle};
  padding: 10px;
  width: 100%;
  background-color: ${(props) => props.theme.color.background.content};
  font-size: 16px;
  color: ${(props) => props.theme.color.secondary};
  border: 0;
  outline: 0;
  transition: width .2s ease-in-out;
  will-change: width;
  resize: none;

  &::placeholder {
    color: ${(props) => props.theme.color.tab.inactive};
  }

  ${(props) => props.hastext && css`
    width: calc(100% - 35px - 20px);

    ${media.tablet`
      width: 100%;
    `}
  `}
`;

type CommentInputProps = {
  hastext?: boolean;
}

export const CommentInputContainer = styled.div`
  position: relative;
`;

export const SendButton = styled.button<SendButtonProps>`
  ${ParagraphStyle};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10px;
  bottom: 5px;
  padding: 3px;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.color.primary};
  border: 0;
  opacity: 0;
  visibility: hidden;
  transition: opacity .2s ease-in-out, visibility 0s .2s;
  will-change: opacity;

  svg {
    height: 20px;
    fill: ${(props) => props.theme.color.secondary};
    transform: translate(-2px, 0);
  }

  ${media.tablet`
    position: static;
    margin-top: 5px;
    padding: 3px 15px;
    width: auto;
    border-radius: 3px;
    opacity: .5;
    visibility: visible;
  `}

  ${(props) => props.show && css`
    opacity: 1 !important;
    visibility: visible;
    transition: opacity .2s ease-in-out, visibility 0s;
    cursor: pointer;
  `}
`;

type SendButtonProps = {
  show?: boolean;
}
