import React from 'react';
import DisabledCameraIcon from 'vectors/disabled-camera.svg';
import { Heading, Small } from 'common';
import { TwitchContainer, NoStreamers } from './styled';

const Twitch: React.FC = () => {
  return (
    <TwitchContainer>
      <Heading as="h2">
        Live On Twitch
      </Heading>

      <NoStreamers>
        <DisabledCameraIcon />
        <Small>There are currently no members streaming.</Small>
      </NoStreamers>
    </TwitchContainer>
  );
};

export default Twitch;
