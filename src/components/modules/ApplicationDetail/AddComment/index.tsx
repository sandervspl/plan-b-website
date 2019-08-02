import * as i from 'types';
import React, { useState } from 'react';
import SendIcon from 'vectors/send.svg';
import LockIcon from 'vectors/lock.svg';
import { useDispatch, useSelector } from 'hooks';
import { sendComment } from 'ducks/applications';
import { CircleImg, ErrorText } from 'common';
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
  const sending = useSelector((state) => state.applications.sendingMessage);
  const isMobile = useSelector((state) => state.ui.isMobile);
  const [error, setError] = useState('');
  const [text, setText] = useState('');

  const handleOnChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setText(e.currentTarget.value);
  };

  const handleSubmit = async () => {
    if (!applicationId || !text) return;

    setError('');

    dispatch(sendComment(type, applicationId, text, userId))
      .then((message) => {
        if (!message) {
          setError('Something went wrong. Try again later.');

          return;
        }

        setText('');
      });
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
            <ErrorText>{error}</ErrorText>
            <SendButton
              show={text.length > 0}
              onClick={handleSubmit}
              disabled={sending}
              loading={sending}
            >
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
