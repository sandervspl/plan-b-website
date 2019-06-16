import React from 'react';
import Slider, { Settings } from 'react-slick';
import { useSelector } from 'hooks';
import { getLatestTwoNews } from 'ducks/posts/reselect';
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
  const posts = useSelector((state) => getLatestTwoNews(state));

  return (
    <Slider {...sliderSettings}>
      {posts.map((post) => (
        <NewsItem key={post.id} post={post} />
      ))}
    </Slider>
  );
};

export default MobileNewsSlider;
