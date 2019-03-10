/* eslint-disable @typescript-eslint/camelcase */
import * as i from 'types';
import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { Header, Subheader } from 'common';
import { isServer } from 'services';
import { HeroContainer, Content } from './styled';
import HeroVideo from '../HeroVideo';

const Hero: React.FC<Props> = ({ page }) => {
  const [ready, setReady] = useState(false);
  const [player, setPlayer] = useState<YT.Player>(null);

  // Init Youtube player
  useEffect(() => {
    // This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');

    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  });

  // Set Youtube player variables and callbacks
  useEffect(() => {
    if (isServer()) return;

    // This function creates an <iframe> (and YouTube player)
    // after the API code downloads.
    window.onYouTubeIframeAPIReady = () => {
      const player = new YT.Player('player', {
        videoId: page.hero_video,
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange,
        },
        playerVars: {
          controls: 0,
          cc_load_policy: 3,
          fs: 0,
          disablekb: 1,
          iv_load_policy: 3,
          modestbranding: 1,
          enablejsapi: 1,
          rel: 0,
          loop: 1,
          showinfo: 0,
          playsinline: 1,
          autoplay: 1,
        },
      });

      setPlayer(player);
    };

    window.onfocus = () => {
      if (player) {
        player.playVideo();
      }
    };

    function onPlayerReady(event: YT.PlayerEvent) {
      event.target.playVideo();
      event.target.mute();
    }

    function onPlayerStateChange(event: YT.OnStateChangeEvent) {
      if (event.data == YT.PlayerState.PLAYING) {
        setTimeout(() => setReady(true), 2900);
      }

      // Loop video
      if (event.data === YT.PlayerState.ENDED) {
        event.target.playVideo();
      }
    }
  });

  return (
    <HeroContainer>
      <HeroVideo ready={ready} />
      <Content>
        <Header>{page.hero_title}</Header>
        <Subheader>{page.hero_server}</Subheader>
      </Content>
    </HeroContainer>
  );
};

export type Props = {
  page: i.PageData;
};

const mapStateToProps: i.MapStateToProps = (state) => ({
  page: state.page.data,
});

export default connect(mapStateToProps)(Hero);
