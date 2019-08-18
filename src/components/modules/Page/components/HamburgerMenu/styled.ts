import styled, { css } from 'styled-components';
import HamburgerSvg from 'vectors/hamburger.svg';
import CloseSvg from 'vectors/close.svg';
import { media } from 'styles';

const IconStyle = css`
  position: absolute;
  top: -19px;
  right: 0;
  height: 30px;
  color: white;
  fill: ${(props) => props.theme.color.secondary};
  transition: opacity 300ms, transform 300ms;
  will-change: opacity, transform;
`;

export const HamburgerIcon = styled(HamburgerSvg)`
  ${IconStyle};
`;

export const CloseIcon = styled(CloseSvg)`
  ${IconStyle};
`;

export const BeyondBurger = styled.button<BeyondBurgerProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  user-select: none;
  background: none;
  border: 0;
  outline: 0;
  transition: 100ms transform;

  &:active {
    transform: scale(0.9);
  }

  ${HamburgerIcon} {
    opacity: 1;
  }

  ${CloseIcon} {
    opacity: 0;
  }

  ${(props) => props.isOpen && css`
    ${HamburgerIcon} {
      opacity: 0;
      transform: rotate(180deg);
    }

    ${CloseIcon} {
      opacity: 1;
      transform: rotate(180deg);
    }
  `}

  ${media.tablet`
    display: none;
  `}
`;

type BeyondBurgerProps = {
  isOpen: boolean;
}
