import { useEffect, useRef, useLayoutEffect } from 'react';

export function useAnimationFrame(callback: Function) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const loop = () => {
    frameRef.current = requestAnimationFrame(loop);
    const cb = callbackRef.current;
    cb();
  };

  const frameRef = useRef<number>();

  useLayoutEffect(() => {
    frameRef.current = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(frameRef.current!);
  }, []);
};
