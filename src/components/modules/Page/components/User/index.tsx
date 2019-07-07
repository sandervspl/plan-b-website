import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { useSelector, useImageLoader } from 'hooks';
import { Avatar } from 'common';
import UserMenu from '../UserMenu';
import { UserInfo, UserData, DKPContainer, DKPIcon, Username, UserContainer } from './styled';

const User: React.FC = () => {
  const user = useSelector((state) => state.user);
  const [menuOpen, setMenuOpen] = useState(false);

  if (!user.data) return null;

  const avatar = useImageLoader(user.data.avatar);

  const toggleMenuOpen = () => setMenuOpen((open) => !open);

  const closeMenu = () => setMenuOpen(false);

  return (
    <UserContainer>
      <OutsideClickHandler onOutsideClick={closeMenu}>
        <UserInfo onClick={toggleMenuOpen}>
          <UserData>
            <DKPContainer>
              <DKPIcon />
              <strong>0</strong> DKP
            </DKPContainer>
            <Username>{user.data.username}</Username>
          </UserData>
          <Avatar src={avatar} />
        </UserInfo>

        <UserMenu open={menuOpen} />
      </OutsideClickHandler>
    </UserContainer>
  );
};

export default User;
