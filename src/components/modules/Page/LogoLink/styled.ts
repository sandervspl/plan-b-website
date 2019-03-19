import styled from 'styled-components';
import { media } from 'styles/utils';

export const LogoLinkContainer = styled.div`
  display: none;
  position: relative;
  z-index: 1;
  margin: 0 auto;
  max-width: 940px;
  transform: translateY(0);
  will-change: transform;
  transition: transform 500ms 500ms ${(props) => props.theme.easing.easeOutQuint};

  a {
    position: absolute;
    top: 30px;
    left: 30px;

    ${media.tablet`
      left: 50px;
    `}
  }
`;
