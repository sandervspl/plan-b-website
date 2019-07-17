import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { useSelector } from 'hooks';
import { Avatar } from 'common';
import UserMenu from '../UserMenu';
import { UserInfo, UserData, DKPContainer, DKPIcon, Username, UserContainer } from './styled';

const User: React.FC = () => {
  const user = useSelector((state) => state.user.data);
  const [menuOpen, setMenuOpen] = useState(false);

  if (!user) return null;

  const toggleMenuOpen = () => setMenuOpen((open) => !open);

  const closeMenu = () => setMenuOpen(false);

  return (
    <UserContainer>
      <OutsideClickHandler onOutsideClick={closeMenu}>
        <UserInfo onClick={toggleMenuOpen}>
          <UserData>
            <DKPContainer>
              <DKPIcon />
              <strong>{user.dkp}</strong> DKP
            </DKPContainer>
            <Username>{user.username}</Username>
          </UserData>
          <Avatar src={user.avatar} />
        </UserInfo>

        <UserMenu open={menuOpen} />
      </OutsideClickHandler>
    </UserContainer>
  );
};

export default User;
