/* eslint-disable @typescript-eslint/camelcase */
import * as i from 'types';
import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { isServer } from 'services';
import { VideoContainer, VideoInner, VideoOverlay, FilmGrainContainer } from './styled';
import FilmGrainFx from './FilmGrain';

const HeroVideo: React.FC<Props> = ({ page }) => {
  const [ready, setReady] = useState(false);
  const [player, setPlayer] = useState<YT.Player>();
  const canvas = useRef<HTMLCanvasElement>(null);

  // Init film grain effect
  useEffect(() => {
    if (canvas.current) {
      new FilmGrainFx(canvas.current);
    }
  });

  // Init Youtube player
  useEffect(() => {
    const apiId = 'youtube-api';

    // Already loaded
    if (document.querySelector(`#${apiId}`)) return;

    // This code loads the IFrame Player API code asynchronously.
    const tag = document.createElement('script');

    tag.id = apiId;
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];

    if (firstScriptTag.parentNode) {
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
  });

  // Set Youtube player variables and callbacks
  useEffect(() => {
    if (isServer) return;

    // This function creates an <iframe> (and YouTube player)
    // after the API code downloads.
    window.onYouTubeIframeAPIReady = initYoutubeVideo;

    // If API is already ready it will not fire onYouTubeIframeAPIReady again
    if (typeof YT !== 'undefined') {
      initYoutubeVideo();
    }

    // Youtube pauses the video on unfocus
    // Resume video after focus is regained
    window.onfocus = () => {
      if (player && player.playVideo) {
        player.playVideo();
      }
    };
  });

  const onPlayerReady = (event: YT.PlayerEvent) => {
    event.target.playVideo();
    event.target.mute();
  };

  const onPlayerStateChange = (event: YT.OnStateChangeEvent) => {
    if (event.data === YT.PlayerState.PLAYING) {
      setTimeout(() => setReady(true), 2900);
    }

    // Loop video
    if (event.data === YT.PlayerState.ENDED) {
      event.target.playVideo();
    }
  };

  const initYoutubeVideo = () => {
    if (player != null || !page.home) return;

    const tempPlayer = new YT.Player('player', {
      videoId: page.home.hero_video,
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

    setPlayer(tempPlayer);
  };

  return (
    <VideoContainer>
      <VideoInner>
        <div id="player" />
      </VideoInner>
      <VideoOverlay ready={ready} />
      <FilmGrainContainer ref={canvas} />
    </VideoContainer>
  );
};

export type Props = {
  page: i.PageState;
};

const mapStateToProps: i.MapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps)(HeroVideo);
