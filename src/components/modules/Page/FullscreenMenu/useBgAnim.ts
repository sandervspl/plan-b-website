import { isServer } from 'services';
import { AnimeTimelineInstance, AnimeAnimParams, AnimeInstanceParams } from 'animejs';
import { useState } from 'react';

const useBgAnim = () => {
  const [generated, setGenerated] = useState(false);
  const [anims, setAnims] = useState<AnimeTimelineInstance[]>([]);

  const anim = (el: Element, i: number) => {
    const anime = require('animejs').default;

    return anime.timeline({
      autoplay: false,
      loop: false,
    } as AnimeInstanceParams)
      .add({
        targets: `.link-bg-${i}`,
        translateY: ['100%', '0%'],
        scaleX: 1,
        duration: 400,
        delay: 200 + i * 100,
        easing: 'easeOutCirc',
      } as AnimeAnimParams)
      .add({
        targets: `.link-bg-${i}`,
        scaleX: ['1', '0'],
        translateY: 0,
        duration: 300,
        autoplay: false,
        easing: 'easeOutCirc',
      } as AnimeAnimParams);
  };

  const generateAnim = () => {
    if (isServer || generated) return;

    const bgs = Array.from(document.querySelectorAll('.link-bg'));

    setAnims(bgs.map(anim));
    setGenerated(true);
  };

  const startAnims = () => {
    anims.forEach((anim) => {
      anim.play();
    });
  };

  return { generateAnim, startAnims, generated };
};

export default useBgAnim;
