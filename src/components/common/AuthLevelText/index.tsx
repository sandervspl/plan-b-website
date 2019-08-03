import * as i from 'types';
import React from 'react';
import { Tooltip } from 'common';
import { AuthLevelTextContainer } from './styled';

export const AuthLevelText: React.FC<AuthLevelTextProps> = ({ children, level }) => {
  const tooltipLabel = level === i.AUTH_LEVEL.OFFICER
    ? 'Officer'
    : level === i.AUTH_LEVEL.GUILD_MASTER
      ? 'Guild Master'
      : '';

  return (
    <AuthLevelTextContainer level={level}>
      <Tooltip place="bottom" delayShow={200} effect="solid" />

      <span data-tip={tooltipLabel}>{children}</span>
    </AuthLevelTextContainer>
  );
};

export type AuthLevelTextProps = {
  level: i.AUTH_LEVEL;
};
