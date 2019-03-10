import * as i from 'types';
import styled from 'styled-components';
import { media } from 'styles/utils';

export const Header = styled.h1.attrs<Props>((props) => ({
  as: props.as,
}))`
  font-size: 65px;
  font-weight: 700;
  line-height: 60px;
  
  ${media.tablet`
    line-height: 70px;
  `}
`;

type Props = {
  as?: i.HeaderType;
}

Header.defaultProps = {
  as: 'h1',
} as any;
