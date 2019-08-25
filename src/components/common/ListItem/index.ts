import styled, { css } from 'styled-components';
import { media } from 'styles';
import { ParagraphStyle, Paragraph } from 'common/typography';

export const ListItemInnerCss = css`
  ${ParagraphStyle};
  display: grid;
  align-items: center;
  padding: 8px 16px;
  width: 100%;

  ${media.tablet`
    display: flex;
  `}
`;

export const ListItem = styled.li`
  margin-bottom: 8px;
  width: 100%;
  background-color: ${(props) => props.theme.color.background};
  border: 1px solid ${(props) => props.theme.color.border.primary};

  ${media.tablet`
    margin-bottom: 16px;
  `}
`;

export const ListItemCell = styled(Paragraph)`
  font-size: 16px;
`;
