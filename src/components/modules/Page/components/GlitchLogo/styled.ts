import styled from 'styled-components';
import { media } from 'styles';
import LogoNameSvg from 'vectors/logo-name.svg';

export const LogoNameIcon = styled(LogoNameSvg)`
  height: 40px;

  ${media.tablet`
    height: 100%;
  `}
`;
