import * as i from 'types';
import React from 'react';
import CommentIcon from 'vectors/comment.svg';
import GroupAddIcon from 'vectors/group_add.svg';
import BabyIcon from 'vectors/baby.svg';
import { Link, ClassText, CircleImg, ListItemCell } from 'common';
import { timeAgo, getDateWithTime, getCmsUrl } from 'services';
import { useSelector } from 'hooks';
import {
  ApplicationItemContainer, CharacterInfo, RoleText, RoleContainer, CommentsContainer,
  SocialContainer, Notification,
} from './styled';

const ApplicationItem: React.FC<Props> = ({ application, unseen, newComments }) => {
  const isMobile = useSelector((state) => state.ui.isMobile);

  return (
    <ApplicationItemContainer>
      <Link to="application-detail" params={{ uuid: application.uuid }}>
        {!isMobile && <Notification active={unseen} />}

        <CircleImg src={getCmsUrl(application.character.class.icon.url)} />

        <CharacterInfo>
          <ClassText classId={application.character.class.id}>
            {application.character.name} ({application.character.level})
          </ClassText>

          <RoleContainer>
            <CircleImg src={getCmsUrl(application.character.role.icon.url)} />
            <RoleText>{application.character.role.name}</RoleText>
          </RoleContainer>
        </CharacterInfo>

        <RoleContainer title={application.character.role.name}>
          <CircleImg src={getCmsUrl(application.character.role.icon.url)} />
          {/* <RoleText>{application.character.role.name}</RoleText> */}
        </RoleContainer>

        <SocialContainer title={application.social ? 'Social' : 'Raider'}>
          {application.social ? <BabyIcon /> : <GroupAddIcon />}
          {/* <RoleText>{application.character.role.name}</RoleText> */}
        </SocialContainer>

        <ListItemCell>
          {application.personal.name} ({application.personal.age} YO)
        </ListItemCell>

        <CommentsContainer title={`${application.commentsAmount} comments`}>
          <CommentIcon />
          {application.commentsAmount}
          <Notification active={newComments} />
        </CommentsContainer>

        <ListItemCell title={getDateWithTime(application.created_at)}>
          {timeAgo(new Date(application.created_at))}
        </ListItemCell>
      </Link>
    </ApplicationItemContainer>
  );
};

export type Props = {
  application: i.ApplicationData;
  unseen?: boolean;
  newComments?: boolean;
};

export default ApplicationItem;
