import * as i from 'types';
import styled from 'styled-components';

export const Subheader = styled.h2.attrs<Props>((props) => ({
  as: props.as,
}))<Props>`
  font-size: 20px;
  color: ${(props) => props.theme.color.primary.medium};
  font-weight: 400;
`;

type Props = {
  as?: i.HeaderType;
}

Subheader.defaultProps = {
  as: 'h2',
};