import React, { useState } from 'react';
import { CircleIcon, DateText } from 'common';
import { CommentContainer, CommentText, CommentInfo, ReadMoreButton } from './styled';

const MAX_TEXT_LENGTH = 200;

const Comment: React.FC<Props> = ({ username, avatar, text, shareDate }) => {
  const [showLongText, setShowLongText] = useState(false);
  const isLongText = text.length > MAX_TEXT_LENGTH;
  const shortText = isLongText
    ? `${text.substr(0, MAX_TEXT_LENGTH)}...`
    : text;

  return (
    <CommentContainer>
      <CircleIcon src={avatar} />
      <CommentText>
        {showLongText ? text : shortText}

        {isLongText && !showLongText && (
          <ReadMoreButton onClick={() => setShowLongText(true)}>
            Read more
          </ReadMoreButton>
        )}

        <CommentInfo>
          {username}
          <DateText date={shareDate} noIcon />
        </CommentInfo>
      </CommentText>
    </CommentContainer>
  );
};

export type Props = {
  username: string;
  avatar: string;
  text: string;
  shareDate: string | Date;
};

export default Comment;
