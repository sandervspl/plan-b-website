import * as i from 'types';
import styled from 'styled-components';

export const Subheader = styled.h2.attrs<Props>((props) => ({
  as: props.as,
}))<Props>`
  font-size: 20px;
  color: ${(props) => props.theme.color.__OLD__.primary.medium};
  font-weight: 400;
  font-family: ${(props) => props.theme.font.primary};
`;

type Props = {
  as?: i.HeaderType | 'p';
}

Subheader.defaultProps = {
  as: 'h2',
};
