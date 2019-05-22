import * as i from 'types';
import React from 'react';
import Slider, { Settings } from 'react-slick';
import { useSelector } from 'react-redux';
import NewsItem from '../NewsItem';

const sliderSettings: Settings = {
  dots: false,
  arrows: false,
  centerMode: true,
  swipeToSlide: true,
  infinite: false,
  centerPadding: '25px',
  slidesToShow: 1.012,
};

const MobileNewsSlider: React.FC = () => {
  const posts = useSelector((state: i.ReduxState) => state.posts);

  return (
    <Slider {...sliderSettings}>
      {posts.list!.map((post) => (
        <NewsItem key={post.id} post={post} />
      ))}
    </Slider>
  );
};

export default MobileNewsSlider;
