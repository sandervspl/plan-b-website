import { useEffect, useRef } from 'react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

export function useBodyScrollLock(determine?: boolean) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    if (determine) {
      disableBodyScroll(ref.current);
    } else {
      enableBodyScroll(ref.current);
    }

    return function cleanup() {
      clearAllBodyScrollLocks();
    };
  }, [determine]);

  return ref;
}
