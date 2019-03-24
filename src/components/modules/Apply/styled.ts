import styled, { css } from 'styled-components';
import { Field } from 'react-final-form';
import { Fullscreenpage } from 'common';

export const RecruitmentContainer = styled(Fullscreenpage)`
  overflow: hidden;

  form {
    position: fixed;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
`;

export const TextField = styled(Field)`
  width: 100%;
  border: 0;
  background: none;
  border-bottom: 1px solid ${(props) => props.theme.color.primary};
  outline: 0;
  font-family: ${(props) => props.theme.font.primary};
  font-size: 30px;
  color: ${(props) => props.theme.color.primary};

  ${(props) => props.hidden && css`
    visibility: hidden;
  `}
`;

export const Label = styled.label`
  span {
    display: block;
    margin-bottom: 10px;
    font-family: ${(props) => props.theme.font.primary};
    font-size: 16px;
    color: ${(props) => props.theme.color.primary};
  }
`;

