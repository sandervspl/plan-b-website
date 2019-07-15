import * as i from 'types';
import React from 'react';
import CommentIcon from 'vectors/comment.svg';
import { Link, ClassText, CircleIcon } from 'common';
import {
  ApplicationItemContainer, CharacterInfo, RoleText, RoleContainer, CommentsContainer,
} from './styled';

const ApplicationItem: React.FC<Props> = ({ application }) => {
  return (
    <ApplicationItemContainer>
      <Link to="application-detail">
        <CircleIcon src={application.character.class.icon.url} />

        <CharacterInfo>
          <ClassText classId={application.character.class.id}>
            {application.character.name}
          </ClassText>

          <RoleContainer>
            <CircleIcon src={application.character.role.icon.url} />
            <RoleText>{application.character.role.name}</RoleText>
          </RoleContainer>
        </CharacterInfo>

        <CommentsContainer>
          <CommentIcon />
          0
        </CommentsContainer>
      </Link>
    </ApplicationItemContainer>
  );
};

export type Props = {
  application: i.ApplicationData;
};

export default ApplicationItem;
