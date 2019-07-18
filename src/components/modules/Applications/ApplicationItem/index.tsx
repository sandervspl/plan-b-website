import * as i from 'types';
import React from 'react';
import CommentIcon from 'vectors/comment.svg';
import { Link, ClassText, CircleIcon } from 'common';
import { timeAgo, getDateWithTime, getCmsUrl } from 'services';
import {
  ApplicationItemContainer, CharacterInfo, RoleText, RoleContainer, CommentsContainer, MiscInfo,
} from './styled';

const ApplicationItem: React.FC<Props> = ({ application }) => {
  return (
    <ApplicationItemContainer>
      <Link to="application-detail" params={{ id: application.id }}>
        <CircleIcon src={getCmsUrl(application.character.class.icon.url)} />

        <CharacterInfo>
          <ClassText classId={application.character.class.id}>
            {application.character.name}
          </ClassText>

          <RoleContainer>
            <CircleIcon src={getCmsUrl(application.character.role.icon.url)} />
            <RoleText>{application.character.role.name}</RoleText>
          </RoleContainer>
        </CharacterInfo>

        <RoleContainer>
          <CircleIcon src={getCmsUrl(application.character.role.icon.url)} />
          <RoleText>{application.character.role.name}</RoleText>
        </RoleContainer>

        <MiscInfo>
          {application.personal.name} ({application.personal.age})
        </MiscInfo>

        <CommentsContainer>
          <CommentIcon />
          0
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
