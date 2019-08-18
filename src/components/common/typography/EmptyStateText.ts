import styled from 'styled-components';
import { media } from 'styles';
import { Paragraph } from './Paragraph';

export const EmptyStateText = styled(Paragraph)`
  margin: 0 20px;
  font-size: 14px !important;
  color: ${(props) => props.theme.color.secondary.darker};

  ${media.tablet`
    margin: 0 40px;
  `}
`;
