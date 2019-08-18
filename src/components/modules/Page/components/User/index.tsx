import React from 'react';
import { useSelector } from 'hooks';
import { CircleImg, DKP } from 'common';
import { UserInfo, UserData, Username, UserContainer } from './styled';

const User: React.FC<Props> = ({ onClick }) => {
  const user = useSelector((state) => state.user.data!);

  return (
    <UserContainer>
      <UserInfo onClick={onClick}>
        <UserData>
          <DKP />
          <Username>{user.username}</Username>
        </UserData>
        <CircleImg src={user.avatar} />
      </UserInfo>
    </UserContainer>
  );
};

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default User;
