import React, { useEffect, useRef } from 'react';
import { VideoContainer, VideoInner, VideoOverlay, GlitchFxContainer } from './styled';


const HeroVideo: React.FC<Props> = ({ ready }) => {
  const canvas = useRef<HTMLCanvasElement>(null);

  // Settings
  const patternScaleX = 1;
  const patternScaleY = 1;
  const patternSize = 64;
  const patternRefreshInterval = 4;
  const patternAlpha = 25; // Integer between 0 and 255

  const patternPixelDataLength = patternSize * patternSize * 4;
  let ctx = null;
  let viewWidth = 0;
  let viewHeight = 0;
  let patternCanvas = null;
  let patternCtx = null;
  let patternData = null;
  let frame = 0;


  useEffect(() => {
    initCanvas();
    initGrain();
    requestAnimationFrame(loop);
  });

  // create a canvas which will render the grain
  const initCanvas = () => {
    viewWidth = canvas.current.width = canvas.current.clientWidth;
    viewHeight = canvas.current.height = canvas.current.clientHeight;
    ctx = canvas.current.getContext('2d');

    ctx.scale(patternScaleX, patternScaleY);
  };

  // create a canvas which will be used as a pattern
  const initGrain = () => {
    patternCanvas = document.createElement('canvas');
    patternCanvas.width = patternSize;
    patternCanvas.height = patternSize;
    patternCtx = patternCanvas.getContext('2d');
    patternData = patternCtx.createImageData(patternSize, patternSize);
  };

  const update = () => {
    let value: number;

    for (let i = 0; i < patternPixelDataLength; i += 4) {
      value = (Math.random() * 255) | 0;

      patternData.data[i    ] = value;
      patternData.data[i + 1] = value;
      patternData.data[i + 2] = value;
      patternData.data[i + 3] = patternAlpha;
    }

    patternCtx.putImageData(patternData, 0, 0);
  };

  const draw = () => {
    ctx.clearRect(0, 0, viewWidth, viewHeight);

    ctx.fillStyle = ctx.createPattern(patternCanvas, 'repeat');
    ctx.fillRect(0, 0, viewWidth, viewHeight);
  };

  const loop = () => {
    if (++frame % patternRefreshInterval === 0) {
      update();
      draw();
    }

    requestAnimationFrame(loop);
  };

  return (
    <VideoContainer>
      <VideoInner>
        <div id="player" />
      </VideoInner>
      <VideoOverlay ready={ready} />
      <GlitchFxContainer ref={canvas} />
    </VideoContainer>
  );
};

export type Props = {
  ready: boolean;
};

export default HeroVideo;
