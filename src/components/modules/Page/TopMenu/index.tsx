import * as i from 'types';
import React, { useState, useEffect } from 'react';
import { Link, Subheader } from 'common';
import { useSelector } from 'react-redux';
import { TopMenuContainer, User, Logo } from './styled';

const TopMenu: React.FC<Props> = ({ className }) => {
  const [mounted, setMounted] = useState(false);
  const userStore = useSelector((state: i.ReduxState) => state.user);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <TopMenuContainer className={className}>
      <Link to="home">
        <Logo as="h2">Plan B</Logo>
      </Link>

      {mounted && (
        <div>
          {userStore.loading ? (
            <Subheader>Signing in...</Subheader>
          ) : !userStore.data ? (
            <Link to="login">
              <Subheader>Sign in</Subheader>
            </Link>
          ) : (
            <User>
              <img src={userStore.data.avatar} alt="" />
              <Subheader>{userStore.data.username}</Subheader>
            </User>
          )}
        </div>
      )}
    </TopMenuContainer>
  );
};

export type Props = {
  className?: string;
};

export default TopMenu;
