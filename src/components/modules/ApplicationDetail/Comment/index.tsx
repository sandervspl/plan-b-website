import * as i from 'types';
import React, { useState } from 'react';
import SecurityIcon from 'vectors/security.svg';
import PublicIcon from 'vectors/public.svg';
import { CircleImg, DateText, AuthLevelText } from 'common';
import { CommentContainer, CommentText, CommentInfo, ReadMoreButton } from './styled';

const MAX_TEXT_LENGTH = 200;

const Comment: React.FC<Props> = ({ message, type }) => {
  const [showLongText, setShowLongText] = useState(false);
  const isLongText = message.text.length > MAX_TEXT_LENGTH;
  const shortText = isLongText
    ? `${message.text.substr(0, MAX_TEXT_LENGTH)}...`
    : message.text;

  return (
    <CommentContainer>
      <CircleImg src={message.user.avatar} />
      <CommentText>
        {showLongText ? message.text : shortText}

        {isLongText && (
          <ReadMoreButton onClick={() => setShowLongText((val) => !val)}>
            Read {showLongText ? 'less' : 'more'}
          </ReadMoreButton>
        )}

        <CommentInfo>
          <AuthLevelText level={message.user.authLevel}>
            {message.user.username}
          </AuthLevelText>

          <DateText date={message.createdAt} noIcon />

          {type === 'private'
            ? <SecurityIcon data-tip="This comment is only visible for officers" />
            : <PublicIcon data-tip="This comment is visible for everyone" />}
        </CommentInfo>
      </CommentText>
    </CommentContainer>
  );
};

export type Props = {
  message: i.Comment;
  type: i.ViewableType;
};

export default Comment;
