import styled from 'styled-components';
import { media } from 'styles';
import { Header } from 'common';

export const TopMenuContainer = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 1;
  margin: 0 auto;
  width: 100vw;
  max-width: 940px;
  transform: translateX(-50%);

  ${media.tablet`
    display: flex;
    justify-content: space-between;
    padding: 30px 50px;

    img {
      width: 30px;
      height: 30px;
      border-radius: 100%;
      border: 1px solid ${(props) => props.theme.color.__OLD__.border.light};
      margin-right: 10px;
    }
  `}
`;

export const User = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled(Header)`
  transform: translate3d(0, -80px, 0);
  will-change: transform;
  transition: transform 500ms 500ms ${(props) => props.theme.easing.easeOutQuint};
`;
