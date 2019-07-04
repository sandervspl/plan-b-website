import React from 'react';
import { useSelector } from 'hooks';
import { Avatar, UserInfo, UserData, DKPContainer, DKPIcon, Username } from './styled';

const User: React.FC = () => {
  const user = useSelector((state) => state.user);

  if (!user.data) return null;

  return (
    <UserInfo>
      <UserData>
        <DKPContainer>
          <DKPIcon />
          <strong>0</strong> DKP
        </DKPContainer>
        <Username>{user.data.username}</Username>
      </UserData>
      <Avatar src={user.data.avatar} alt="" />
    </UserInfo>
  );
};

export default User;
