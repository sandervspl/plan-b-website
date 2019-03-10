import styled from 'styled-components';
import { Header } from 'common';
import { media } from 'styles/utils';

export const HeroContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  width: 100%;
  height: 75vh;
  position: relative;
  overflow: hidden;

  ${Header} {
    ${media.tablet`
      font-size: 120px;
    `}
  }
`;

export const Content = styled.div`
  z-index: 1;
  height: 300px;
`;

export const VideoContainer = styled.div`
  background: ${(props) => props.theme.color.secondary.dark};
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
`;

export const VideoInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;

  @media (min-aspect-ratio: 16/9) {
    height: 300%; top: -100%;
  }

  @media (max-aspect-ratio: 16/9) {
    width: 300%; left: -100%;
  }

  & > iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
`;

export const VideoOverlay = styled.div<VideoOverlayProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.color.secondary.dark};
  opacity: ${(props) => props.ready ? .75 : 1};
  transition: opacity .3s ease-out;
  will-change: opacity;
`;

type VideoOverlayProps = {
  ready: boolean;
};
