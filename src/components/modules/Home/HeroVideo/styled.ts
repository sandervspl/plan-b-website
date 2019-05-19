import styled from 'styled-components';
import { TRANSITION_TIME_MS_SHORT } from 'styles/pageTransition';

export const VideoContainer = styled.div`
  background: ${(props) => props.theme.color.__OLD__.secondary.dark};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 1;
  will-change: opacity;
  transition: opacity ${TRANSITION_TIME_MS_SHORT}ms ease-out;
`;

export const VideoInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;

  @media (min-aspect-ratio: 16/9) {
    /* height: 300%; top: -100%; */
    height: 310%;
    top: -104%;
    width: 110%;
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
  background-color: ${(props) => props.theme.color.__OLD__.secondary.dark};
  opacity: ${(props) => props.ready ? .55 : 1};
  transition: opacity .3s ease-out;
  will-change: opacity;
`;

type VideoOverlayProps = {
  ready: boolean;
};

export const FilmGrainContainer = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
