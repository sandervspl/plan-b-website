import { useEffect, useRef, useLayoutEffect } from 'react';

export function useAnimationFrame(callback: Function) {
  const callbackRef = useRef(callback);
  // const frameRef = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const loop = () => {
    // @ts-ignore
    frameRef.current = requestAnimationFrame(loop);
    const cb = callbackRef.current;
    cb();
  };

  const frameRef = useRef();

  useLayoutEffect(() => {
    //@ts-ignore
    frameRef.current = requestAnimationFrame(
      loop
    );

    // @ts-ignore
    return () => cancelAnimationFrame(frameRef.current);
  }, []);
};
