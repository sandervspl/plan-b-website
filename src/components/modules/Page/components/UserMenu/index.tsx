import * as i from 'types';
import React from 'react';
import apiConfig from 'services/api/config';
import { useSelector } from 'hooks';
import { Paragraph, CircleImg, DKP, NavLink } from 'common';
import { UserMenuContainer, UserInfo, Line, OptionsContainer } from './styled';

const UserMenu: React.FC<Props> = ({ open }) => {
  const user = useSelector((state) => state.user.data);

  const logout = () => {
    window.location.href = `${apiConfig.url.api}/auth/logout`;
  };

  return (
    <UserMenuContainer open={open}>
      {user && (
        <>
          <UserInfo>
            <CircleImg src={user.avatar} />
            <div>
              <Paragraph>{user.username}</Paragraph>
              <Paragraph>@{user.discordname}</Paragraph>
              <DKP />
            </div>
          </UserInfo>

          <Line />
        </>
      )}

      <OptionsContainer>
        <li>
          <NavLink to="home">News</NavLink>
        </li>
        <li>
          <NavLink to="about">About</NavLink>
        </li>
        <Line />
      </OptionsContainer>

      <OptionsContainer>
        {user && user.authLevel > i.AUTH_LEVEL.USER && (
          <>
            <li>
              <NavLink to="applications">
                <strong>Applications</strong>
              </NavLink>
            </li>
            <Line />
          </>
        )}

        {user ? (
          <li>
            <button onClick={logout}>
              Sign out
            </button>
          </li>
        ) : (
          <li>
            <NavLink to="login">Sign in</NavLink>
          </li>
        )}
      </OptionsContainer>
    </UserMenuContainer>
  );
};

export type Props = {
  open?: boolean;
};

export default UserMenu;
