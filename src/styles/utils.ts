import { css } from 'styled-components';

export const sizes = {
  veryLarge: 1375,
  large: 1200,
  mediumLarge: 1100,
  desktop: 992,
  tablet: 768,
  mobile: 480,
  small: 380,
};

export const pixelsToEm = (pixels) => pixels / 16;

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = pixelsToEm(sizes[label]);
  // @ts-ignore
  accumulator[label] = (...args) => css`@media (min-width: ${emSize}em) {${css(...args)};}`;
  return accumulator;
}, {});
