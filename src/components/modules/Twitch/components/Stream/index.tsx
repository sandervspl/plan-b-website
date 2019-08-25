import * as i from 'types';
import React from 'react';
import { useSelector } from 'hooks';
import { Heading, Link } from 'common';
import { StreamContainer, ViewCount, StreamImg, Content } from './styled';

const Stream: React.FC<Props> = ({ data }) => {
  const windowWidth = useSelector((state) => state.ui.windowWidth);

  // Get image that spans window width with correct ratio
  const height = Math.ceil(.56 * windowWidth).toString();
  const bgUrl = data.stream.thumbnail_url
    .replace('{width}', windowWidth.toString())
    .replace('{height}', height);

  return (
    <StreamContainer>
      <Link external to={`https://www.twitch.tv/${data.user.login}`}>
        <StreamImg>
          <img src={bgUrl} alt="" loading="lazy" />
        </StreamImg>
        <ViewCount>{data.stream.viewer_count}</ViewCount>
        <Content>
          <StreamImg>
            <img src={data.user.profile_image_url} alt="" loading="lazy" />
          </StreamImg>
          <Heading as="h2">{data.user.display_name}</Heading>
          <Heading as="h4">{data.stream.title}</Heading>
        </Content>
      </Link>
    </StreamContainer>
  );
};

export type Props = {
  data: i.ActiveStream;
};

export default Stream;
