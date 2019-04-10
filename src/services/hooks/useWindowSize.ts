import { useState, useEffect } from 'react';
import _ from 'lodash/fp';
import { isServer } from 'services';

export const useWindowSize = () => {
  const [mounted, setMounted] = useState(false);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (mounted || isServer) return;

    document.addEventListener('resize', onResize);

    setMounted(true);
  });

  const onResize = _.debounce(500)(() => {
    if (isServer) return;

    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  });

  return { width: size.width, height: size.height };
};
