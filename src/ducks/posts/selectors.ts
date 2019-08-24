import * as i from 'types';
import { createSelector } from 'reselect';

const LATEST_NEWS_MAX = 2;

export const getLatestTwoNews = createSelector(
  (state: i.ReduxState) => state.posts.data,
  (posts) => {
    const tempPosts = [...posts!];

    return tempPosts.reverse().filter((post, i) => i < LATEST_NEWS_MAX);
  }
);

export const getOtherNews = createSelector(
  (state: i.ReduxState) => state.posts.data,
  (posts) => {
    const tempPosts = [...posts!];

    return tempPosts.reverse().filter((post, i) => i >= LATEST_NEWS_MAX);
  }
);
