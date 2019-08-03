import * as i from 'types';
import styled, { css } from 'styled-components';
import { AuthLevelTextProps } from '.';

export const AuthLevelTextContainer = styled.span<AuthLevelTextProps>`
  > span {
    ${(props) => props.level === i.AUTH_LEVEL.OFFICER && css`
      color: rgb(153, 45, 34);
    `}

    ${(props) => props.level === i.AUTH_LEVEL.GUILD_MASTER && css`
      color: rgb(255, 0, 0);
    `}
  }
`;
