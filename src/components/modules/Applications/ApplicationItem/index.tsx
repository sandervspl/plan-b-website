import * as i from 'types';
import React from 'react';
import CommentIcon from 'vectors/comment.svg';
import { Link, ClassText, CircleImg } from 'common';
import { timeAgo, getDateWithTime, getCmsUrl } from 'services';
import {
  ApplicationItemContainer, CharacterInfo, RoleText, RoleContainer, CommentsContainer, MiscInfo,
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
            {application.character.name}
          </ClassText>

          <RoleContainer>
            <CircleImg src={getCmsUrl(application.character.role.icon.url)} />
            <RoleText>{application.character.role.name}</RoleText>
          </RoleContainer>
        </CharacterInfo>

        <RoleContainer>
          <CircleImg src={getCmsUrl(application.character.role.icon.url)} />
          <RoleText>{application.character.role.name}</RoleText>
        </RoleContainer>

        <MiscInfo>
          {application.personal.name} ({application.personal.age})
        </MiscInfo>

        <CommentsContainer>
          <CommentIcon />
          {application.commentsAmount}
        </CommentsContainer>

        <MiscInfo title={getDateWithTime(application.created_at)}>
          {timeAgo(new Date(application.created_at))}
        </MiscInfo>
      </Link>
    </ApplicationItemContainer>
  );
};

export type Props = {
  application: i.ApplicationData;
};

export default ApplicationItem;
