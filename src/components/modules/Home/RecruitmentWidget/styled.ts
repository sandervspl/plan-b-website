import * as i from 'types';
import styled, { css } from 'styled-components';
import { media } from 'styles';
import { Header } from 'common';
import { ContentBlockContainer } from 'modules/Home/styled';

export const RecruitmentBlock = styled(ContentBlockContainer)`
  background: ${(props) => props.theme.color.primary.medium};
  overflow-x: hidden;

  ${media.tablet`
    align-self: flex-start;
    padding: 50px 30px;
  `}

  ${Header} {
    font-size: 30px;
    line-height: 40px;
    margin-bottom: 10px;

    ${media.tablet`
      font-size: 35px;
      line-height: 40px;
      margin-bottom: 20px;
    `}
  }
`;

export const RecruitmentContent = styled.div<RecruitmentContentProps>`
  will-change: transform;
  transform: translate(100px);
  transition: transform 1s 300ms ${(props) => props.theme.easing.easeOutCirc};

  ${(props) => props.isVisible && css`
    transform: translate(0);
  `}
`;

type RecruitmentContentProps = i.VisibilityProps;
