import React, { useState, useEffect } from 'react';
import Hamburger from '../Hamburger';
import FullscreenMenu from '../FullscreenMenu';
import { MobileNavContainer } from './styled';

const MobileNav: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [locked, setLocked] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) {
      setVisible(true);
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

    setTimeout(() => {
      setLocked(false);
    }, 1000);
  };

  return (
    <>
      <MobileNavContainer onClick={handleClick}>
        <Hamburger active={open} />
      </MobileNavContainer>
      <FullscreenMenu active={open} visible={visible} />
    </>
  );
};

export default MobileNav;
