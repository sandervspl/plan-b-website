import React, { useRef, useEffect, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import { useSelector, useAnimationFrame } from 'hooks';
import { getLatestTwoNews } from 'ducks/posts/reselect';
import NewsItem from '../NewsItem';
import Progress from '../Progress';
import { SliderContainer } from './styled';

const MobileNewsSlider: React.FC = () => {
  const slider = useRef<Slider>(null);
  const posts = useSelector((state) => getLatestTwoNews(state));
  const [nextSlideTime, setNextSlideTime] = useState(Date.now());
  const [slideId, setSlideId] = useState(0);
  const [progress, setProgress] = useState(0);

  const sliderSettings: Settings = {
    dots: false,
    arrows: false,
    centerMode: true,
    swipeToSlide: true,
    infinite: true,
    centerPadding: '0',
    slidesToShow: 1,
    beforeChange: (prevSlideId, nextSlideId) => {
      setSlideId(nextSlideId);
    },
    onSwipe: () => {
      setNextSlideTime(Date.now());
    },
  };

  useAnimationFrame(() => {
    if (!slider.current) return;

    const now = Date.now();
    const time = 5000;
    const diff = now - nextSlideTime;

    if (diff > time) {
      slider.current.slickNext();
      setNextSlideTime(now);
    }

    setProgress(diff / time);
  });

  return (
    <SliderContainer>
      <Slider ref={slider} {...sliderSettings}>
        {posts.map((post) => (
          <NewsItem key={post.id} post={post} />
        ))}
      </Slider>
      <Progress slides={posts.length} activeId={slideId} progress={progress} />
    </SliderContainer>
  );
};

export default MobileNewsSlider;
