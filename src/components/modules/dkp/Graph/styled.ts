import styled, { css } from 'styled-components';
import DKPSvg from 'vectors/dkp.svg';
import DiffArrowSvg from 'vectors/diff-arrow.svg';
import { ParagraphStyle, Paragraph } from 'common';

export const Title = styled.h2`
  ${ParagraphStyle};
  margin-bottom: 8px;
  color: ${(props) => props.theme.color.secondary.darker};
  font-size: 16px;
`;

export const LatestValue = styled(Paragraph)`
  font-size: 30px;
  line-height: 1;
`;

export const DiffValue = styled(Paragraph)<DiffValueProps>`
  margin-top: 4px;
  font-size: 16px;
  color: ${(props) => props.theme.color[props.positive ? 'positive' : 'negative']};
`;

type DiffValueProps = {
  positive?: boolean;
}

export const DKPIcon = styled(DKPSvg)<DiffValueProps>`
  margin-right: 8px;
  height: 26px;
  fill: ${(props) => props.theme.color.secondary};
`;

export const DiffArrowIcon = styled(DiffArrowSvg)`
  position: relative;
  top: 2px;
  margin-left: 8px;
  width: 15px;
  height: 15px;

  ${(props) => !props.positive && css`
    transform: rotate(90deg);
  `}
  
  g > path {
    fill: ${(props) => props.theme.color[props.positive ? 'positive' : 'negative']};
  }
  
  g > rect {
    stroke: ${(props) => props.theme.color[props.positive ? 'positive' : 'negative']};
  }
`;

export const GraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 40px 32px;
  width: 48%;
  border-radius: 3px;
  border: 1px solid ${(props) => props.theme.color.border.primary};
  background-color: ${(props) => props.theme.color.background};

  .recharts-wrapper {
    margin-top: 16px;
  }
`;

export const TooltipContainer = styled.div`
  ${ParagraphStyle};
  padding: 8px 16px;
  background: ${(props) => props.theme.color.background.light};
  border: 0;
  border-radius: 3px;
  box-shadow: ${(props) => props.theme.shadow.content};
  font-size: 14px;
`;
