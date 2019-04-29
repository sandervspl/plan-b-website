import styled from 'styled-components';
import { media } from 'styles/utils';
import { ImagesContainer, ImageContainer } from '../styled';

export const IntroductionContainer = styled.div`
  padding-right: 180px;
  max-width: 640px;

  ${media.large`
    max-width: 740px;

    ${ImagesContainer} {
      transform: translateX(90%);
    }
  `}

  ${ImagesContainer} {
    transform: translateX(95%);

    ${ImageContainer} {
      img {
        height: 100%;
      }

      &:nth-child(1) {
        grid-column: 1 / span 10;
        grid-row: 3 / span 20;
      }

      &:nth-child(2) {
        grid-column: 11 / span 11;
        grid-row: 3 / span 7;
      }

      &:nth-child(3) {
        grid-column: 11 / span 5;
        grid-row: 10 / span 10;
      }

      ${media.large`
        &:nth-child(1) {
          grid-column: 1 / span 20;
          grid-row: 3 / span 20;
        }

        &:nth-child(2) {
          grid-column: 21 / span 11;
          grid-row: 3 / span 7;
        }

        &:nth-child(3) {
          grid-column: 21 / span 5;
          grid-row: 10 / span 10;
        }
      `}

      ${media.veryLarge`
        &:nth-child(1) {
          grid-column: 1 / span 41;
          grid-row: 3 / span 26;
        }

        &:nth-child(2) {
          grid-column: 42 / span 14;
          grid-row: 3 / span 9;
        }

        &:nth-child(3) {
          grid-column: 42 / span 7;
          grid-row: 12 / span 15;
        }
      `}
    }
  }
`;
