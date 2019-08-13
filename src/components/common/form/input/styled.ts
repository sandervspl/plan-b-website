import styled, { keyframes, css } from 'styled-components';
import { theme, media } from 'styles';
import { ParagraphStyle } from 'common/typography';

const inputHighlighter = keyframes`
  from {
    background: ${theme.color.primary};
  }

  to {
    width: 0;
    background: transparent;
  }
`;

export const InputContainer = styled.div`  
  position: relative;
  margin-bottom: 25px;

  select {
    border-radius: 0;

    option:disabled {
      color: #5d5d5d;
    }
  }
  
  ${media.tablet`
    margin-bottom: 45px;
  `}
`;

export const Label = styled.label<LabelProps>`
  ${ParagraphStyle};
  position: absolute;
  top: 10px;
  left: 5px;
  color: #5d5d5d;
  font-size: 16px;
  font-weight: normal;
  pointer-events: none;
  transition: 0.2s ease all;

  ${media.tablet`
    font-size: 24px;
  `}

  ${(props) => props.haserror && css`
    color: ${(props) => props.theme.color.negative} !important;
  `}
`;

type LabelProps = {
  haserror?: boolean;
}

export const Bar = styled.span`
  display: block;
  position: relative;
  width: 100%;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 1px;
    background: ${(props) => props.theme.color.primary};
    transition: 0.2s ease all;
  }

  &::before {
    left: 50%;
  }

  &::after {
    right: 50%; 
  }

  ${media.tablet`
    width: 300px;
  `}
`;

export const Highlight = styled.span`  
  position: absolute;
  height: 60%; 
  width: 100px; 
  top: 25%; 
  left: 0;
  pointer-events: none;
  opacity: 0.5;
`;

export const StyledInput = styled.input`
  ${ParagraphStyle};
  display: block;
  padding: 10px 10px 5px 5px;
  width: 100%;
  font-size: 16px;
  color: ${(props) => props.theme.color.secondary};
  border-radius: 0;
  border: none;
  border-bottom: 1px solid #5d5d5d;
  background: none;

  &:focus {
    outline: none;
  }

  &:focus ~ .highlight {
    animation: ${inputHighlighter} 0.3s ease;
  }

  &:focus ~ ${Label},
  &:valid ~ ${Label},
  &:disabled ~ ${Label} {
    top: -10px;
    font-size: 14px;
    color: ${(props) => props.theme.color.secondary.dark};

    ${media.tablet`
      top: -15px;
    `}
  }

  ${(props) => props.value && css`
    ~ ${Label} {
      top: -10px;
      font-size: 14px;
      color: ${(props) => props.theme.color.secondary.dark};

      ${media.tablet`
        top: -15px;
      `}
    }
  `}

  &:focus ~ ${Bar}::before {
    width: 50%;
  }

  &:focus ~ ${Bar}::after {
    width: 50%;
  }

  &:disabled {
    color: #5a5a5a;
    cursor: not-allowed;
  }

  ${media.tablet`
    padding: 10px 10px 10px 5px;
    width: 300px;
    font-size: 20px;
  `}
`;
