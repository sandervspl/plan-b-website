import * as i from 'types';
import React, { useState } from 'react';
import SecurityIcon from 'vectors/security.svg';
import PublicIcon from 'vectors/public.svg';
import { CircleImg, DateText, Tooltip, AuthLevelText } from 'common';
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
          <AuthLevelText level={message.user.authLevel} id={message.id.toString()}>
            {message.user.username}
          </AuthLevelText>

          <DateText date={message.createdAt} noIcon />

          {type === 'private'
            ? <SecurityIcon data-tip="This comment is only visible for officers" data-for={message.id} />
            : <PublicIcon data-tip="This comment is visible for everyone" data-for={message.id} />}
        </CommentInfo>

        <Tooltip id={message.id.toString()} effect="solid" delayShow={200} place="bottom" />
      </CommentText>
    </CommentContainer>
  );
};

export type Props = {
  message: i.Comment;
  type: i.ViewableType;
};

export default Comment;
