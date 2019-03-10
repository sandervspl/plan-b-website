import * as i from 'types';
import styled from 'styled-components';

export const Header = styled.h1.attrs<Props>((props) => ({
  as: props.as,
}))`
  font-size: 65px;
`;

type Props = {
  as?: i.HeaderType;
}

Header.defaultProps = {
  as: 'h1',
} as any;
