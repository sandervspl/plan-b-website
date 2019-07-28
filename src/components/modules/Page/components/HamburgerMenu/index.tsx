import React, { useState } from 'react';
import { BeyondBurger, HamburgerIcon, CloseIcon } from './styled';

const HamburgerMenu: React.FC<Props> = (props) => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setOpen((state) => !state);

    if (typeof props.onClick === 'function') {
      props.onClick(e);
    }
  };

  return (
    <BeyondBurger {...props} onClick={handleClick} isOpen={isOpen}>
      <HamburgerIcon />
      <CloseIcon />
    </BeyondBurger>
  );
};

type Props = React.ButtonHTMLAttributes<{}>;

export default HamburgerMenu;
