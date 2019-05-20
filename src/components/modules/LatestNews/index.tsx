import * as i from 'types';
import React from 'react';
import { useSelector } from 'react-redux';
import Slider, { Settings } from 'react-slick';
import { GlitchLogo } from 'common';
import NewsItem from './components/NewsItem';
import { LatestNewsContainer } from './styled';

const sliderSettings: Settings = {
  dots: false,
  arrows: false,
  centerMode: true,
  swipeToSlide: true,
  infinite: false,
  centerPadding: '25px',
  slidesToShow: 1.012,
};

const LatestNews: React.FC = () => {
  const posts = useSelector((state: i.ReduxState) => state.posts);
  const isMobile = useSelector((state: i.ReduxState) => state.ui.isMobile);

  if (!posts.list) return null;

  return (
    <LatestNewsContainer>
      {isMobile ? (
        <Slider {...sliderSettings}>
          {posts.list!.map((post) => (
            <NewsItem key={post.id} post={post} />
          ))}
        </Slider>
      ) : (
        posts.list!.map((post) => (
          <NewsItem key={post.id} post={post} />
        ))
      )}

      <GlitchLogo />
    </LatestNewsContainer>
  );
};

export default LatestNews;
