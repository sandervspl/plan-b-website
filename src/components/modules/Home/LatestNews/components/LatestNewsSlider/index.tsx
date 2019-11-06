import React, { useRef, useState, useMemo } from 'react';
import Slider, { Settings } from 'react-slick';
import { useSelector, useInterval } from 'hooks';
import { getLatestNews } from 'ducks/posts/selectors';
import { NewsItem } from 'common';
import Progress from '../Progress';
import { SliderContainer } from './styled';

const LatestNewsSlider: React.FC = () => {
  const slider = useRef<Slider>(null);
  const posts = useSelector(getLatestNews);
  const [nextSlideTime, setNextSlideTime] = useState(Date.now());
  const [activeSlideId, setActiveSlideId] = useState(0);
  const [progress, setProgress] = useState(0);

  const resetTime = () => {
    setNextSlideTime(Date.now());
  };

  const sliderSettings = useMemo<Settings>(() => ({
    dots: false,
    arrows: false,
    centerMode: true,
    swipeToSlide: true,
    infinite: true,
    centerPadding: '0',
    slidesToShow: 1,
    beforeChange: (prevSlideId, nextSlideId) => {
      setActiveSlideId(nextSlideId);
    },
    onSwipe: resetTime,
  }), []);

  useInterval(() => {
    if (!slider.current) return;

    const now = Date.now();
    const time = 5000;
    const dt = now - nextSlideTime;

    if (dt > time) {
      slider.current.slickNext();
      setNextSlideTime(now);
    }

    setProgress(dt / time);
  }, 1000 / 27); // 27 fps

  const toSlide = (id: number) => {
    if (!slider.current) return;
    if (id === activeSlideId) return;

    slider.current.slickGoTo(id);
    resetTime();
  };

  return (
    <SliderContainer>
      <Slider ref={slider} {...sliderSettings}>
        {posts.map((post) => (
          <NewsItem key={post.id} post={post} />
        ))}
      </Slider>
      <Progress
        slides={posts.length}
        activeId={activeSlideId}
        progress={progress}
        toSlide={toSlide}
      />
    </SliderContainer>
  );
};

export default LatestNewsSlider;
