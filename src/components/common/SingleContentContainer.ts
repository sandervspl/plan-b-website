import * as i from 'types';
import styled, { css } from 'styled-components';
import { media } from 'styles/utils';
import { Header } from './typography';

export const SingleContentContainer = styled.div<SingleContentContainerProps>`
  padding: 30px;
  will-change: transform;
  transform: translate(-100px);
  transition: transform 1s 300ms ${(props) => props.theme.easing.easeOutCirc};
  overflow: hidden;

  ${(props) => props.visible && css`
    transform: translate(0);
  `}

  ${Header} {
    margin-bottom: 20px;
  }

  ${media.tablet`
    padding: 50px;
  `}
`;

type SingleContentContainerProps = i.VisibilityProps;
