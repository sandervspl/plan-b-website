import * as i from 'types';
import React from 'react';
import NotInterestedIcon from 'vectors/not-interested.svg';
import CheckCircleIcon from 'vectors/check-circle.svg';
import CheckIcon from 'vectors/check.svg';
import { useDispatch, useSelector } from 'hooks';
import { vote } from 'ducks/applications';
import { ProgressBar } from 'common';
import {
  VotingContainer, Button, ResultContainer, Results, Result, AvatarRow, Avatar, ResultText,
  VotedText,
} from './styled';

const MAX_AMOUNT_AVATAR = 3;

const Voting: React.FC = () => {
  const dispatch = useDispatch();
  const application = useSelector((state) => state.applications.detail);
  const userVote = useSelector((state) => state.applications.userVote);
  const user = useSelector((state) => state.user.data);

  if (!application) return null;


  const handleVote = (decision: i.VOTE) => () => {
    if (!application || !user) return;

    dispatch(vote(application.id, user.id, decision));
  };

  const getMaxAvatars = (votes: i.Vote[]) => {
    return votes.filter((_, i) => i < MAX_AMOUNT_AVATAR);
  };


  const userVoted = typeof userVote === 'number';
  const votingDisabled = userVoted || application.status !== 'open';
  const acceptVotes = application.votes.accepts;
  const rejectVotes = application.votes.rejects;
  const acceptAmount = acceptVotes.length;
  const rejectAmount = rejectVotes.length;
  const acceptAvatarAmount = acceptAmount > MAX_AMOUNT_AVATAR ? MAX_AMOUNT_AVATAR : acceptAmount;
  const rejectAvatarAmount = rejectAmount > MAX_AMOUNT_AVATAR ? MAX_AMOUNT_AVATAR : rejectAmount;
  const userVotedAccept = userVote === i.VOTE.ACCEPT;
  const userVotedReject = userVote === i.VOTE.REJECT;
  const isNegativeVoted = rejectAmount > acceptAmount;

  return (
    <VotingContainer hasVoted={votingDisabled}>
      {votingDisabled ? (
        <ResultContainer isNegativeVoted={isNegativeVoted}>
          {userVoted && (
            <VotedText>
              <CheckIcon /> Voted!
            </VotedText>
          )}

          <Results>
            <Result>
              <AvatarRow>
                {getMaxAvatars(acceptVotes).map((vote, i) => (
                  <Avatar
                    key={vote.id}
                    src={vote.user.avatar}
                    num={i}
                    title={vote.user.username}
                  />
                ))}
              </AvatarRow>

              <ResultText
                votes={acceptAvatarAmount - 1}
                votedThis={userVotedAccept}
                canMargin
              >
                {userVotedAccept && <CheckIcon />} {acceptAmount} accepted
              </ResultText>
            </Result>

            <Result>
              {getMaxAvatars(rejectVotes).map((vote, i) => (
                <Avatar key={vote.id} src={vote.user.avatar} num={i} />
              ))}

              <ResultText
                votes={rejectAvatarAmount - 1}
                votedThis={userVotedReject}
              >
                {userVotedReject && <CheckIcon />} {rejectAmount} rejected
              </ResultText>
            </Result>
          </Results>

          <ProgressBar
            max={acceptAmount + rejectAmount}
            current={acceptAmount}
          />
        </ResultContainer>
      ) : (
        <>
          <Button status="accepted" onClick={handleVote(i.VOTE.ACCEPT)}>
            <CheckCircleIcon />
            Vote accept
          </Button>
          <Button status="rejected" onClick={handleVote(i.VOTE.REJECT)}>
            <NotInterestedIcon />
            Vote reject
          </Button>
        </>
      )}
    </VotingContainer>
  );
};

export default Voting;
