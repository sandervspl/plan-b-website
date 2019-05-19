import styled, { css } from 'styled-components';
import { media } from 'styles/utils';
import { getStaticUrl } from 'services';
import bgImg from 'images/recruitment/char_pane_bg.jpg?external';
import { Paragraph } from 'common';
import LoaderSvg from './components/loader.svg';

export const CharacterPaneContainer = styled.div<CharacterPaneContainerProps>`
  margin-top: 35px;
  opacity: 0;
  transition: 300ms opacity ${(props) => props.theme.easing.easeInOutCirc};

  ${(props) => props.active && css`
    opacity: 1;
  `}

  ${media.tablet`
    position: absolute;
    top: -70px;
    margin-top: 0;
    right: 120px;
    width: 38%;
    height: calc(100% + 70px);
    background: url(${getStaticUrl(bgImg)}) center center;
    background-size: cover;
    box-shadow: 5px 6px 15px rgba(0, 0, 0, .3);

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: .85;
      background-color: ${(props) => props.theme.color.__OLD__.secondary.dark};
    }
  `}
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
  width: 100%;
  height: 100%;

  ${Paragraph} {
    text-align: center;
  }

  ${media.tablet`
    right: 120px;
    width: 38%;

    ${Paragraph} {
      text-align: left;
    }
  `}
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
  ${media.tablet`
    display: grid;
    grid-template-rows: 30% 30% 1fr;
    height: 100%;
  `}
`;
