import React from 'react';
import DisabledCameraIcon from 'vectors/disabled-camera.svg';
import { Heading, Small } from 'common';
import { useSelector } from 'hooks';
import { TwitchContainer, NoStreamers, StreamsContainer } from './styled';
import Stream from './components/Stream';

const Twitch: React.FC = () => {
  const streams = useSelector((state) => state.twitch.data);
  const noStreams = !streams || streams.length === 0;

  return (
    <TwitchContainer>
      <Heading as="h2">
        Live On Twitch
      </Heading>

      {noStreams ? (
        <NoStreamers>
          <DisabledCameraIcon />
          <Small>There are currently no members streaming.</Small>
        </NoStreamers>
      ) : (
        <StreamsContainer>
          {streams!.map((stream) => (
            <Stream stream={stream} />
          ))}
        </StreamsContainer>
      )}
    </TwitchContainer>
  );
};

export default Twitch;
