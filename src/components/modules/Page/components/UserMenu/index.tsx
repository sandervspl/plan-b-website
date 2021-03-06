import * as i from 'types';
import React from 'react';
import apiConfig from 'services/api/config';
import { useSelector, useBodyScrollLock } from 'hooks';
import { Paragraph, CircleImg, DKP, NavLink, Link } from 'common';
import { UserMenuContainer, UserInfo, Line, OptionsContainer } from './styled';

const UserMenu: React.FC<Props> = ({ open }) => {
  const user = useSelector((state) => state.user.data);
  const isMobile = useSelector((state) => state.ui.isMobile);

  const ref = useBodyScrollLock(isMobile && open);

  const logout = () => {
    window.location.href = `${apiConfig.url.api}/auth/logout`;
  };

  return (
    <UserMenuContainer open={open} ref={ref}>
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

      {user && (
        <OptionsContainer>
          <li>
            <NavLink to="dkp">Dkp</NavLink>
          </li>
          <li>
            <NavLink to="applications">Applications</NavLink>
          </li>
          <Line />
        </OptionsContainer>
      )}

      <OptionsContainer>
        {user && user.authLevel > i.AUTH_LEVEL.USER && (
          <>
            <li>
              <Link external to={`${apiConfig.url.cms}/admin`}>
                <strong>CMS</strong>
              </Link>
            </li>
            <li>
              <Link external to="https://console.firebase.google.com/u/0/project/plan-b-website-fd627/storage/plan-b-website-fd627.appspot.com/files">
                <strong>Storage</strong>
              </Link>
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
