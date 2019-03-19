import * as i from 'types';
import styled, { css } from 'styled-components';
import { media } from 'styles';
import { Header, Paragraph } from 'common';
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

  ${(props) => props.visible && css`
    transform: translate(0);
  `}
`;

type RecruitmentContentProps = i.VisibilityProps;

export const ClassRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px 0;

  ${media.tablet`
    align-items: center;
    flex-direction: row;
  `}

  ${Paragraph} {
    font-weight: 400;
    text-transform: uppercase;
  }
`;

export const ClassIcon = styled.img<ClassIconProps>`
  width: 35px;
  height: 35px;
  border: 1px solid ${(props) => props.theme.color.secondary};

  &:not(:last-child) {
    margin-right: 5px;
  }

  ${(props) => !props.active && css`
    opacity: .25;
  `}
`;

type ClassIconProps = {
  active: boolean;
};

export const ClassGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10px;

  ${media.tablet`
    display: block;
  `}
`;
