import { useEffect, RefObject } from 'react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

export function useBodyScrollLock(
  scrollLockTargetRef: RefObject<HTMLElement>,
  determine?: boolean
) {
  useEffect(() => {
    if (!scrollLockTargetRef.current) {
      return;
    }

    if (determine) {
      disableBodyScroll(scrollLockTargetRef.current);
    } else {
      enableBodyScroll(scrollLockTargetRef.current);
    }

    return function cleanup() {
      clearAllBodyScrollLocks();
    };
  }, [determine]);
}
