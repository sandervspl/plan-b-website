import * as i from 'types';
import React from 'react';
import apiConfig from 'services/api/config';
import { useSelector } from 'hooks';
import { Paragraph, Link, CircleImg } from 'common';
import { UserMenuContainer, UserInfo, Line, OptionsContainer } from './styled';

const UserMenu: React.FC<Props> = ({ open }) => {
  const user = useSelector((state) => state.user.data!);

  const logout = () => {
    window.location.href = `${apiConfig.url.api}/auth/logout`;
  };

  return (
    <UserMenuContainer open={open}>
      <UserInfo>
        <CircleImg src={user.avatar} />
        <div>
          <Paragraph>{user.username}</Paragraph>
          <Paragraph>@{user.discordname}</Paragraph>
        </div>
      </UserInfo>

      <Line />

      <OptionsContainer>
        {user.authLevel > i.AUTH_LEVEL.USER && (
          <>
            <li>
              <Link to="applications">
                <strong>Applications</strong>
              </Link>
            </li>
            <Line />
          </>
        )}
        <li>
          <button onClick={logout}>
            Sign out
          </button>
        </li>
      </OptionsContainer>
    </UserMenuContainer>
  );
};

export type Props = {
  open?: boolean;
};

export default UserMenu;
