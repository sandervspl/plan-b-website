import React, { useRef, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import { useSelector, useInterval } from 'hooks';
import { getLatestTwoNews } from 'ducks/posts/reselect';
import NewsItem from '../NewsItem';
import Progress from '../Progress';
import { SliderContainer } from './styled';

const LatestNewsSlider: React.FC = () => {
  const slider = useRef<Slider>(null);
  const posts = useSelector((state) => getLatestTwoNews(state));
  const [nextSlideTime, setNextSlideTime] = useState(Date.now());
  const [slideId, setSlideId] = useState(0);
  const [progress, setProgress] = useState(0);

  const resetTime = () => {
    setNextSlideTime(Date.now());
  };

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
    onSwipe: resetTime,
  };

  useInterval(() => {
    if (!slider.current) return;

    const now = Date.now();
    const time = 5000;
    const diff = now - nextSlideTime;

    if (diff > time) {
      slider.current.slickNext();
      setNextSlideTime(now);
    }

    setProgress(diff / time);
  }, 1000 / 27); // 27 fps

  const toSlide = (id: number) => {
    if (!slider.current) return;

    console.log(id);

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
      <Progress slides={posts.length} activeId={slideId} progress={progress} toSlide={toSlide} />
    </SliderContainer>
  );
};

export default LatestNewsSlider;
