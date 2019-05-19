import * as i from 'types';
import React from 'react';
import { useSelector } from 'react-redux';
import Slider, { Settings } from 'react-slick';
import { LatestNewsContainer } from './styled';
import NewsItem from './components/NewsItem';

const sliderSettings: Settings = {
  dots: false,
  arrows: false,
  centerMode: true,
  swipeToSlide: true,
  infinite: false,
  centerPadding: '25px',
  slidesToShow: 1.012,
};

const LatestNews: React.FC<Props> = () => {
  const posts = useSelector((state: i.ReduxState) => state.posts);

  if (!posts.list) return null;

  return (
    <LatestNewsContainer>
      <Slider {...sliderSettings}>
        {posts.list!.map((post) => (
          <NewsItem key={post.id} post={post} />
        ))}
      </Slider>
    </LatestNewsContainer>
  );
};

export type Props = {

};

export default LatestNews;
