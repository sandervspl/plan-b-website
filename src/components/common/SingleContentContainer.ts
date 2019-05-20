import * as i from 'types';
import styled, { css } from 'styled-components';
import { media } from 'styles';
import { __OLD__Header } from './typography';

export const SingleContentContainer = styled.div<SingleContentContainerProps>`
  padding: 30px;
  margin: 0 auto;
  max-width: 740px;
  will-change: transform;
  transform: translate(-100px);
  transition: transform 1s 300ms ${(props) => props.theme.easing.easeOutCirc};
  overflow: hidden;

  ${(props) => props.isVisible && css`
    transform: translate(0);
  `}

  ${__OLD__Header} {
    margin-bottom: 30px;

    ${media.tablet`
      margin-bottom: 50px;
    `}
  }

  ${media.tablet`
    padding: 50px;
  `}
`;

type SingleContentContainerProps = i.VisibilityProps;
