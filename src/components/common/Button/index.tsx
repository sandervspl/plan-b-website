import React from 'react';
import { ButtonContainer, Content, LoadingProgress, LoadingProgressInner } from './styled';

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <ButtonContainer {...props}>
      <Content>{children}</Content>
      <LoadingProgress>
        <LoadingProgressInner loading={props.loading} />
      </LoadingProgress>
    </ButtonContainer>
  );
};

export type ButtonProps = React.ButtonHTMLAttributes<{}> & {
  styleType?: 'simple';
  loading?: boolean;
};
