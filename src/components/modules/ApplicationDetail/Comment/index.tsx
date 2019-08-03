import * as i from 'types';
import React, { useState } from 'react';
import SecurityIcon from 'vectors/security.svg';
import PublicIcon from 'vectors/public.svg';
import { CircleImg, DateText, Tooltip } from 'common';
import { CommentContainer, CommentText, CommentInfo, ReadMoreButton } from './styled';

const MAX_TEXT_LENGTH = 200;

const Comment: React.FC<Props> = ({ username, avatar, text, shareDate, type }) => {
  const [showLongText, setShowLongText] = useState(false);
  const isLongText = text.length > MAX_TEXT_LENGTH;
  const shortText = isLongText
    ? `${text.substr(0, MAX_TEXT_LENGTH)}...`
    : text;

  return (
    <CommentContainer>
      <CircleImg src={avatar} />
      <CommentText>
        {showLongText ? text : shortText}

        {isLongText && (
          <ReadMoreButton onClick={() => setShowLongText((val) => !val)}>
            Read {showLongText ? 'less' : 'more'}
          </ReadMoreButton>
        )}

        <CommentInfo>
          {username}
          <DateText date={shareDate} noIcon />
          {type === 'private'
            ? <SecurityIcon data-tip="This comment is only visible for officers" />
            : <PublicIcon data-tip="This comment is visible for everyone" />}
        </CommentInfo>

        <Tooltip effect="solid" delayShow={200} place="bottom" />
      </CommentText>
    </CommentContainer>
  );
};

export type Props = {
  username: string;
  avatar: string;
  text: string;
  shareDate: string | Date;
  type: i.MessageType;
};

export default Comment;
