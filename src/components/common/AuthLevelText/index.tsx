import * as i from 'types';
import React from 'react';
import { AuthLevelTextContainer } from './styled';

export const AuthLevelText: React.FC<AuthLevelTextProps> = ({ children, level, id }) => {
  const tooltipLabel = level === i.AUTH_LEVEL.OFFICER
    ? 'Officer'
    : level === i.AUTH_LEVEL.GUILD_MASTER
      ? 'Guild Master'
      : '';

  return (
    <AuthLevelTextContainer level={level}>
      <span data-for={id} data-tip={tooltipLabel}>{children}</span>
    </AuthLevelTextContainer>
  );
};

export type AuthLevelTextProps = {
  level: i.AUTH_LEVEL;
  id?: string;
};
