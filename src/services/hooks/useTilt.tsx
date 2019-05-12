import * as i from 'types';
import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const PERSPECTIVE = 1000;
const SPEED = 1000;
const MAX_TILT_DEG = 35;

export function useTilt() {
  const isMobile = useSelector((state: i.ReduxState) => state.ui.isMobile);
  const containerRef = useRef<HTMLElement>();
  const [tiltStyle, setTiltStyle] = useState<i.TiltStyle>({
    style: {
      transform: `perspective(${PERSPECTIVE}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: '',
      willChange: 'transform',
    },
  });
  const [updateCall, setUpdateCall] = useState<number | null>(null);
  const [transitionTimeout, setTransitionTimeout] = useState<number | null>(null);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
    left: 0,
    top: 0,
  });

  useEffect(() => {
    return function cleanup() {
      if (transitionTimeout) {
        clearTimeout(transitionTimeout);
      }

      if (updateCall) {
        cancelAnimationFrame(updateCall);
      }
    };
  }, []);

  const setRef = (el: HTMLElement) => {
    containerRef.current = el;
  };

  const getValues = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const x = (e.nativeEvent.clientX - dimensions.left) / dimensions.width;
    const y = (e.nativeEvent.clientY - dimensions.top) / dimensions.height;
    const _x = Math.min(Math.max(x, 0), 1);
    const _y = Math.min(Math.max(y, 0), 1);

    const tiltX = (-1 * (MAX_TILT_DEG / 2 - _x * MAX_TILT_DEG)).toFixed(2);
    const tiltY = (-1 * (_y * MAX_TILT_DEG - MAX_TILT_DEG / 2)).toFixed(2);

    const percentageX =  _x * 100;
    const percentageY = _y * 100;

    return {
      tiltX,
      tiltY,
      percentageX,
      percentageY,
    };
  };

  const setTransition = () => {
    if (isMobile) return;

    if (transitionTimeout) {
      clearTimeout(transitionTimeout);
    }

    setTiltStyle({
      style: {
        ...tiltStyle.style,
        transition: `${SPEED}ms cubic-bezier(.03,.98,.52,.99)`,
      },
    });

    setTransitionTimeout(setTimeout(() => {
      setTiltStyle({
        style: {
          ...tiltStyle.style,
          transition: '',
        },
      });
    }, SPEED));
  };

  const update = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => () => {
    if (isMobile) return;

    const values = getValues(e);

    setTiltStyle({
      style: {
        ...tiltStyle.style,
        transform: `
          perspective(${PERSPECTIVE}px)
          rotateX(${values.tiltY}deg)
          rotateY(${values.tiltX}deg)
          scale3d(1, 1, 1)
        `,
      },
    });

    setUpdateCall(null);
  };

  const updateElementPosition = () => {
    const containerEl = containerRef.current;

    if (!containerEl) return;

    const rect = containerEl.getBoundingClientRect();

    setDimensions({
      width: containerEl.offsetWidth,
      height: containerEl.offsetHeight,
      left: rect.left,
      top: rect.top,
    });
  };

  const onMouseEnter = () => {
    updateElementPosition();
    setTransition();
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.persist();

    if (updateCall != null) {
      window.cancelAnimationFrame(updateCall);
    }

    setUpdateCall(requestAnimationFrame(update(e)));
  };

  const onMouseLeave = () => {
    setTransition();
  };

  return {
    tiltStyle,
    setRef,
    mouseEvents: {
      onMouseEnter,
      onMouseMove,
      onMouseLeave,
    },
  };
};

export type TiltProps = {

};
