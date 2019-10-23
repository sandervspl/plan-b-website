import * as i from 'types';
import React, { useState } from 'react';
import SecurityIcon from 'vectors/security.svg';
import PublicIcon from 'vectors/public.svg';
import { useSelector } from 'hooks';
import { CircleImg, DateText, Tooltip, AuthLevelText } from 'common';
import DeleteCommentModal from '../DeleteCommentModal';
import { CommentContainer, CommentText, CommentInfo, ReadMoreButton, DeleteButton } from './styled';

const MAX_TEXT_LENGTH = 200;

const Comment: React.FC<Props> = ({ comment }) => {
  const userId = useSelector((state) => state.user.data!.id);
  const [isOpen, setOpen] = useState(false);
  const [showLongText, setShowLongText] = useState(false);
  const isLongText = comment.text.length > MAX_TEXT_LENGTH;
  const shortText = isLongText
    ? `${comment.text.substr(0, MAX_TEXT_LENGTH)}...`
    : comment.text;

  return (
    <CommentContainer>
      <CircleImg src={comment.user.avatar} />
      <CommentText>
        {showLongText ? comment.text : shortText}

        {isLongText && (
          <ReadMoreButton onClick={() => setShowLongText((val) => !val)}>
            Read {showLongText ? 'less' : 'more'}
          </ReadMoreButton>
        )}

        <CommentInfo>
          <AuthLevelText level={comment.user.authLevel} id={comment.id.toString()}>
            {comment.user.username}
          </AuthLevelText>

          <DateText date={comment.createdAt} noIcon />

          {comment.public
            ? <PublicIcon data-tip="This comment is visible for everyone" data-for={comment.id} />
            : <SecurityIcon data-tip="This comment is only visible for officers" data-for={comment.id} />}

          {comment.user.id === userId && !comment.deletedAt && (
            <DeleteButton onClick={() => setOpen(true)}>Delete</DeleteButton>
          )}
        </CommentInfo>

        <Tooltip id={comment.id.toString()} effect="solid" delayShow={200} place="bottom" />

        <DeleteCommentModal isModalOpen={isOpen} setModalOpen={setOpen} comment={comment} />
      </CommentText>
    </CommentContainer>
  );
};

export type Props = {
  comment: i.Comment;
};

export default Comment;
