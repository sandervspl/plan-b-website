import * as i from 'types';
import React from 'react';
import { useSelector } from 'react-redux';
import { Avatar, UserInfo, UserData, DKPContainer, DKPIcon, Username } from './styled';

const User: React.FC = () => {
  const user = useSelector((state: i.ReduxState) => state.user);

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
