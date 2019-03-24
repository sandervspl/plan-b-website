import React from 'react';
import { ButtonContainer } from './styled';

const Button: React.FC<props> = ({ children, ...props }) => (
  <ButtonContainer {...props}>
    <span>{children}</span>
    {/* <span>
      <span />
      <span />
      <span />
    </span> */}
  </ButtonContainer>
);

export type props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default Button;
