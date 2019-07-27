import * as i from 'types';
import React from 'react';
import { useSelector } from 'hooks';
import { Heading } from 'common';
import { StreamContainer, ViewCount, Thumbnail } from './styled';

const Stream: React.FC<Props> = ({ stream }) => {
  const windowWidth = useSelector((state) => state.ui.windowWidth);

  // Get image that spans window width with correct ratio
  const height = Math.ceil(.56 * windowWidth).toString();
  const bgUrl = stream.thumbnail_url
    .replace('{width}', windowWidth.toString())
    .replace('{height}', height);

  return (
    <StreamContainer>
      <Thumbnail>
        <img src={bgUrl} alt="" />
      </Thumbnail>
      <ViewCount>{stream.viewer_count}</ViewCount>
      <Heading as="h2">{stream.user_name}</Heading>
      <Heading as="h4">{stream.title}</Heading>
    </StreamContainer>
  );
};

export type Props = {
  stream: i.ActiveStreamData;
};

export default Stream;
