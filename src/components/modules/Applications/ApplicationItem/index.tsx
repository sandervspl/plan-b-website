import * as i from 'types';
import React from 'react';
import CommentIcon from 'vectors/comment.svg';
import GroupAddIcon from 'vectors/group_add.svg';
import BabyIcon from 'vectors/baby.svg';
import { Link, ClassText, CircleImg, ListItemCell } from 'common';
import { timeAgo, getDateWithTime, getCmsUrl } from 'services';
import {
  ApplicationItemContainer, CharacterInfo, RoleText, RoleContainer, CommentsContainer,
  SocialContainer,
} from './styled';

const ApplicationItem: React.FC<Props> = ({ application }) => {
  const to = application.public ? 'public-application-detail' : 'application-detail';
  const params = application.public ? { uuid: application.public.uuid } : { id: application.id };

  return (
    <ApplicationItemContainer>
      {/*
        // @ts-ignore Typescript is confused (and so am I) */}
      <Link to={to} params={params}>
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
          {application.personal.name} ({application.personal.age})
        </ListItemCell>

        <CommentsContainer title={`${application.commentsAmount} comments`}>
          <CommentIcon />
          {application.commentsAmount}
        </CommentsContainer>

        <ListItemCell title={getDateWithTime(application.updated_at)}>
          {timeAgo(new Date(application.updated_at))}
        </ListItemCell>
      </Link>
    </ApplicationItemContainer>
  );
};

export type Props = {
  application: i.ApplicationData;
};

export default ApplicationItem;
