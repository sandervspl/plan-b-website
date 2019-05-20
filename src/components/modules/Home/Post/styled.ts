import * as i from 'types';
import styled, { css } from 'styled-components';
import { Paragraph, __OLD__Header } from 'common';
import { media } from 'styles';
import { ContentBlockContainer } from 'modules/Home/styled';

export const PostBlock = styled(ContentBlockContainer)`
  overflow-x: hidden;

  ${__OLD__Header} {
    line-height: 50px;
    font-size: 40px;

    ${media.tablet`
      line-height: 70px;
      font-size: 65px;
    `}
  }
`;

export const DateText = styled(Paragraph)`
  margin-bottom: 20px;
  font-size: 15px;
  color: ${(props) => props.theme.color.__OLD__.primary.medium};
`;

export const PostContent = styled.div<PostContentProps>`
  will-change: transform;
  transform: translate(-100px);
  transition: transform 1s 300ms ${(props) => props.theme.easing.easeOutCirc};

  ${(props) => props.isVisible && css`
    transform: translate(0);
  `}
`;

type PostContentProps = i.VisibilityProps;
