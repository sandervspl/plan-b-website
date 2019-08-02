import * as i from 'types';
import React, { useState } from 'react';
import SendIcon from 'vectors/send.svg';
import LockIcon from 'vectors/lock.svg';
import { useDispatch, useSelector } from 'hooks';
import { sendComment } from 'ducks/applications';
import { CircleImg } from 'common';
import {
  AddCommentContainer, User, CommentInput, CommentInputContainer, SendButton,
} from './styled';

const AddComment: React.FC<Props> = ({ username, avatar, type }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.data && state.user.data.id);
  const applicationId = useSelector((state) => (
    state.applications.detail
      ? state.applications.detail.id
      : state.applications.detailPublic
        ? state.applications.detailPublic!.id
        : undefined
  ));
  const applicationLocked = useSelector((state) => (
    state.applications.detail && state.applications.detail.locked
  ));
  const isMobile = useSelector((state) => state.ui.isMobile);
  const [text, setText] = useState('');

  const handleOnChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setText(e.currentTarget.value);
  };

  const handleSubmit = async () => {
    if (!applicationId || !text) return;

    await dispatch(sendComment(type, applicationId, text, userId));

    setText('');
  };

  return (
    <AddCommentContainer>
      <User>
        <CircleImg src={avatar} />
        {username}
      </User>

      <CommentInputContainer>
        {applicationLocked ? (
          <CommentInput as="div" disabled>
            <LockIcon /> Locked
          </CommentInput>
        ) : (
          <>
            <CommentInput
              placeholder="Add comment"
              value={text}
              onChange={handleOnChange}
              hastext={text.length > 0}
            />
            <SendButton show={text.length > 0} onClick={handleSubmit}>
              {isMobile ? <SendIcon /> : 'Share'}
            </SendButton>
          </>
        )}
      </CommentInputContainer>
    </AddCommentContainer>
  );
};

export type Props = {
  username: string;
  avatar: string;
  type: i.MessageType;
};

export default AddComment;
