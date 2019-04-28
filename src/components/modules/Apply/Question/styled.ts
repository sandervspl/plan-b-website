import styled, { css } from 'styled-components';
import { media } from 'styles/utils';
import { TRANSITION_TIME_MS_SHORT, TRANSITION_TIME_MS } from 'styles/pageTransition';
import { Paragraph } from 'common';

export const QuestionContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 230px 0 50px 50px;
  height: 84vh;
  background-color: ${(props) => props.theme.color.secondary};
`;

export const NextButton = styled.button`
  position: absolute;
  bottom: 50px;
  right: 0;
  transform: translate3d(50%, 0, 0);
  background: none;
  border: 0;
  outline: 0;
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
  font-family: ${(props) => props.theme.font.primary};
  color: ${(props) => props.theme.color.primary};
  cursor: pointer;
  will-change: transform;
  transition: transform 300ms;

  &:before {
    content: '— ';
  }

  &:hover {
    transform: translate3d(55%, 0, 0);
  }
`;
