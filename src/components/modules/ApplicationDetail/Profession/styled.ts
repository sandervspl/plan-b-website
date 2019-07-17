import styled from 'styled-components';
import { ParagraphStyle, Paragraph } from 'common';
import { ProgressBarContainer, ProgressIndicator } from 'common/ProgressBar/styled';

export const ProfessionContainer = styled.div`
  ${ProgressBarContainer} {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    border: 1px solid ${(props) => props.theme.color.border.primary};
    background-color: ${(props) => props.theme.color.background};

    ${Paragraph} {
      position: relative;
      line-height: initial;
      font-size: 14px;
    }
  }

  ${ProgressIndicator} {
    background-color: ${(props) => props.theme.color.primary.dark};
  }
`;

export const ProfessionName = styled.div`
  ${ParagraphStyle};
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  font-size: 14px;

  svg {
    width: 16px;
    height: 16px;
  }
`;

