import React, { useState, useEffect, useRef } from 'react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import MenuIcon from '../MenuIcon';
import FullscreenMenu from '../FullscreenMenu';
import { MobileNavContainer } from './styled';

const MobileNav: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [locked, setLocked] = useState(false);
  const [visible, setVisible] = useState(false);
  const mobileNavRef = useRef<HTMLElement>(null);

  useEffect(() => {

    return function cleanup() {
      clearAllBodyScrollLocks();
    };
  }, []);

  useEffect(() => {
    if (open) {
      setVisible(true);
      disableBodyScroll(mobileNavRef.current!);
    } else {
      setTimeout(() => {
        setVisible(false);
      }, 300);
    }
  }, [open]);

  const handleClick = () => {
    if (locked) return;

    setOpen(!open);
    setLocked(true);
    enableBodyScroll(mobileNavRef.current!);

    setTimeout(() => {
      setLocked(false);
    }, 1000);
  };

  return (
    <>
      <MobileNavContainer onClick={handleClick} ref={mobileNavRef}>
        <MenuIcon isActive={open} />
      </MobileNavContainer>
      <FullscreenMenu isActive={open} isVisible={visible} />
    </>
  );
};

export default MobileNav;
