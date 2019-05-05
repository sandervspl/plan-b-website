import styled, { css } from 'styled-components';
import { media } from 'styles/utils';
import { getStaticUrl } from 'services';
import bgImg from 'images/recruitment/char_pane_bg.jpg?external';
import LoaderSvg from './components/loader.svg';

export const CharacterPaneContainer = styled.div<CharacterPaneContainerProps>`
  position: absolute;
  top: -70px;
  right: 120px;
  width: 38%;
  height: calc(100% + 70px);
  background: url(${getStaticUrl(bgImg)}) center center;
  background-size: cover;
  opacity: 0;
  box-shadow: 5px 6px 15px rgba(0, 0, 0, .3);
  transition: 300ms opacity ${(props) => props.theme.easing.easeInOutCirc};

  ${(props) => props.active && css`
    opacity: 1;
  `}

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: .85;
    background-color: ${(props) => props.theme.color.secondary.dark};
  }
`;

type CharacterPaneContainerProps = {
  active?: boolean;
}

export const CharacterInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 120px;
  width: 38%;
  height: 100%;
`;

export const Loader = styled(LoaderSvg)`
  height: 12px;
  width: 53px;

  ${media.tablet`
    width: 53px;
  `}
`;

export const CharacterPaneContent = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
`;

export const CharacterData = styled.div`
  display: grid;
  grid-template-rows: 30% 30% 1fr;
  height: 100%;
`;
