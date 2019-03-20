import styled, { css } from 'styled-components';
import { media } from 'styles/utils';
import { Paragraph } from 'common';

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
