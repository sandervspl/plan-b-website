import * as i from 'types';
import React, { useState } from 'react';
import LockIcon from 'vectors/lock.svg';
import SecurityIcon from 'vectors/security.svg';
import PublicIcon from 'vectors/public.svg';
import { useDispatch, useSelector } from 'hooks';
import { sendComment, fetchComments } from 'ducks/applications';
import { CircleImg, ErrorText } from 'common';
import {
  AddCommentContainer, User, CommentInput, CommentInputContainer, SendButton, ButtonContainer,
  SharingNotice,
} from './styled';

const AddComment: React.FC<Props> = ({ username, avatar, type }) => {
  const dispatch = useDispatch();
  const applicationUuid = useSelector((state) => state.applications.detail!.uuid);
  const applicationLocked = useSelector((state) => state.applications.locked);
  const sending = useSelector((state) => state.applications.sendingMessage);
  const [error, setError] = useState('');
  const [text, setText] = useState('');

  const handleOnChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setText(e.currentTarget.value);
  };

  const handleSubmit = async () => {
    if (!applicationUuid || !text) return;

    setError('');

    dispatch(sendComment(type, text))
      .then((comment) => {
        if (!comment) {
          setError('Something went wrong. Try again later.');

          return;
        }

        setText('');

        dispatch(fetchComments(type));
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
            />
            <ErrorText>{error}</ErrorText>
            <ButtonContainer>
              <SendButton
                show={text.length > 0}
                onClick={handleSubmit}
                disabled={sending}
                loading={sending}
              >
                Share
              </SendButton>

              <SharingNotice>
                {type === 'private' ? (
                  <>
                    <SecurityIcon />
                    Will only be visible for officers.
                  </>
                ) : (
                  <>
                    <PublicIcon />
                    Will be visible for everyone.
                  </>
                )}
              </SharingNotice>
            </ButtonContainer>
          </>
        )}
      </CommentInputContainer>
    </AddCommentContainer>
  );
};

export type Props = {
  username: string;
  avatar: string;
  type: i.CommentType;
};

export default AddComment;
