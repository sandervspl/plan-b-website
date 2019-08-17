import styled, { css } from 'styled-components';
import { ParagraphStyle, Button, Paragraph } from 'common';
import { CircleImgContainer } from 'common/CircleImg/styled';
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

  ${CircleImgContainer} {
    width: 32px;
    height: 32px;
  }
`;

export const CommentInput = styled.textarea<CommentInputProps>`
  ${ParagraphStyle};
  padding: 10px;
  width: 100%;
  min-height: 70px;
  background-color: ${(props) => props.theme.color.background.content};
  font-size: 16px;
  color: ${(props) => props.theme.color.secondary};
  border: 0;
  outline: 0;
  resize: none;

  &::placeholder {
    color: ${(props) => props.theme.color.tab.inactive};
  }

  ${(props) => props.disabled && css`
    display: flex;
    align-items: center;
    min-height: 48px;
    color: ${(props) => props.theme.color.tab.inactive};

    svg {
      margin-right: 5px;
      fill: ${(props) => props.theme.color.tab.inactive};
    }
  `}

  ${media.tablet<CommentInputProps>`
    resize: vertical;
  `}
`;

type CommentInputProps = {
  disabled?: boolean;
}

export const CommentInputContainer = styled.div`
  position: relative;
`;

export const SendButton = styled(Button)<SendButtonProps>`
  ${ParagraphStyle};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  padding: 0 16px;
  height: 32px;
  border-radius: 3px;
  background-color: ${(props) => props.theme.color.primary};
  line-height: 1;
  border: 0;
  opacity: .5;
  text-transform: none;
  cursor: not-allowed;
  transition: opacity .2s ease-in-out;
  will-change: opacity;

  svg {
    height: 20px;
    fill: ${(props) => props.theme.color.secondary};
    transform: translate(-2px, 0);
  }

  ${(props) => props.show && css`
    opacity: 1;
    transition: opacity .2s ease-in-out;
    cursor: pointer;
  `}

  &:disabled {
    opacity: .5;
  }
`;

type SendButtonProps = {
  show?: boolean;
}

export const SharingNotice = styled(Paragraph)`
  margin-left: 8px;
  font-size: 14px;
  line-height: 1;
  color: ${(props) => props.theme.color.secondary.darker};

  svg {
    margin-right: 8px;
    height: 16px;
    transform: translateY(3px);
    fill: ${(props) => props.theme.color.secondary.darker};
  }

  ${media.tablet`
    margin-left: 16px;
  `}
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
