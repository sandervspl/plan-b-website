import * as i from 'types';
import { createSelector } from 'reselect';

export const getLatestTwoNews = createSelector(
  (state: i.ReduxState) => state.posts.data,
  (posts) => {
    const tempPosts = [...posts!];

    return tempPosts.reverse().filter((post, i) => i < 2);
  }
);

export const getOtherNews = createSelector(
  (state: i.ReduxState) => state.posts.data,
  (posts) => {
    const tempPosts = [...posts!];

    return tempPosts.reverse().filter((post, i) => i >= 2);
  }
);
