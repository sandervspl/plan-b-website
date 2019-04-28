import { useState, useEffect } from 'react';
import _ from 'lodash/fp';
import { isServer } from 'services';

export const useWindowSize = () => {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    document.addEventListener('resize', onResize);

    return function cleanup() {
      document.addEventListener('resize', onResize);
    };
  }, []);

  const onResize = _.debounce(500)(() => {
    if (isServer) return;

    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  });

  return { width: size.width, height: size.height };
};
