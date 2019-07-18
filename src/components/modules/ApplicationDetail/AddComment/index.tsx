import React, { useState } from 'react';
import SendIcon from 'vectors/send.svg';
import { useDispatch, useSelector } from 'hooks';
import { sendComment } from 'ducks/applications';
import { CircleIcon } from 'common';
import {
  AddCommentContainer, User, CommentInput, CommentInputContainer, SendButton,
} from './styled';

const AddComment: React.FC<Props> = ({ username, avatar }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.data && state.user.data.id);
  const applicationId = useSelector((state) => (
    state.applications.detail && state.applications.detail.id
  ));
  const [text, setText] = useState('');

  const handleOnChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setText(e.currentTarget.value);
  };

  const handleSubmit = () => {
    if (!userId || !applicationId) return;

    dispatch(sendComment(applicationId, userId, text));
  };

  return (
    <AddCommentContainer>
      <User>
        <CircleIcon src={avatar} />
        {username}
      </User>

      <CommentInputContainer>
        <CommentInput
          placeholder="Add comment"
          value={text}
          onChange={handleOnChange}
          hastext={text.length > 0}
        />
        <SendButton show={text.length > 0} onClick={handleSubmit}>
          <SendIcon />
        </SendButton>
      </CommentInputContainer>
    </AddCommentContainer>
  );
};

export type Props = {
  username: string;
  avatar: string;
};

export default AddComment;
