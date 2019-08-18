import * as i from 'types';
import React, { useRef, useEffect } from 'react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import apiConfig from 'services/api/config';
import { useSelector } from 'hooks';
import { Paragraph, CircleImg, DKP, NavLink, Link } from 'common';
import { UserMenuContainer, UserInfo, Line, OptionsContainer } from './styled';

const UserMenu: React.FC<Props> = ({ open }) => {
  const user = useSelector((state) => state.user.data);
  const scrollLockTargetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollLockTargetRef.current) {
      return;
    }

    if (open) {
      disableBodyScroll(scrollLockTargetRef.current);
    } else {
      enableBodyScroll(scrollLockTargetRef.current);
    }

    return function cleanup() {
      clearAllBodyScrollLocks();
    };
  }, [open]);

  const logout = () => {
    window.location.href = `${apiConfig.url.api}/auth/logout`;
  };

  return (
    <UserMenuContainer open={open} ref={scrollLockTargetRef}>
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
            <NavLink to="public-applications">Applications</NavLink>
          </li>
          <Line />
        </OptionsContainer>
      )}

      <OptionsContainer>
        {user && user.authLevel > i.AUTH_LEVEL.USER && (
          <>
            <li>
              <NavLink to="applications">
                <strong>Applications</strong>
              </NavLink>
            </li>
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
