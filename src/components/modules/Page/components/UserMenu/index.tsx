import React from 'react';
import apiConfig from 'services/api/config';
import { useSelector } from 'hooks';
import { Paragraph, Avatar } from 'common';
import { UserMenuContainer, UserInfo, Line, OptionsContainer } from './styled';

const UserMenu: React.FC<Props> = ({ open }) => {
  const user = useSelector((state) => state.user.data!);

  const logout = () => {
    window.location.href = `${apiConfig.url.api}/discord/auth/logout`;
  };

  return (
    <UserMenuContainer open={open}>
      <UserInfo>
        <Avatar src={user.avatar} />
        <div>
          <Paragraph>{user.username}</Paragraph>
          <Paragraph>{user.discordname}</Paragraph>
        </div>
      </UserInfo>

      <Line />

      <OptionsContainer>
        <li>
          <button onClick={logout}>Logout</button>
        </li>
      </OptionsContainer>
    </UserMenuContainer>
  );
};

export type Props = {
  open?: boolean;
};

export default UserMenu;
