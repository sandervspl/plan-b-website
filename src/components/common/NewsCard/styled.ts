import styled from 'styled-components';
import { media } from 'styles';
import * as glitch from 'styles/glitch';
import { Tag, Link } from 'common';
import { lineClamp } from 'common/styles';
import { UnderlineStyle } from 'common/typography';

export const ReadMore = styled.span`
  display: none;

  ${media.tablet`
    display: inline-block;
    align-self: flex-end;
    position: absolute;
    bottom: 0;
    right: 0;
    margin-right: 60px;
    text-transform: uppercase;
    font-family: ${(props) => props.theme.font.primary};
    font-size: 16px;
    line-height: 24px;
    color: ${(props) => props.theme.color.secondary};

    &:after {
      ${UnderlineStyle};
      transform: scaleX(0);
      will-change: transform;
      transition: transform .2s ease-in-out;
      transform-origin: 100% 50%;
      transform-style: preserve-3d;
      backface-visibility: hidden;
    }
  `}
`;

export const NewsImage = styled.figure`
  position: relative;
  margin: 0;
  width: 100%;
  height: 95px;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.color.background};
    opacity: .2;
    will-change: opacity;
    transition: opacity .2s ease-in-out;
  }

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${media.tablet`
    width: 405px;
    height: 255px;

    &:nth-child(n+2) {
      position: absolute;
      top: 0;
      opacity: 0;

      &:after {
        opacity: 1;
      }
    }

    &:nth-child(2),
    &:nth-child(3) {
      &:after {
        background-color: ${(props) => props.theme.color.glitch.primary};
      }
    }
    
    &:nth-child(4),
    &:nth-child(5) {
      &:after {
        background-color: ${(props) => props.theme.color.glitch.secondary};
      }
    }
  `}
`;

export const NewsCardContainer = styled(Link)`
  position: relative;

  &:not(:last-child) {
    margin-bottom: 25px;

    ${media.tablet`
      margin-bottom: 70px;
    `}
  }

  ${media.tablet`
    display: flex;

    &:hover {
      ${ReadMore}:after {
        transform: scaleX(1);
        transform-origin: 0 50%;
      }

      ${NewsImage} {
        &:after {
          opacity: 0.1;
        }

        &:nth-child(n+2) {
          opacity: 1;
        }

        &:nth-child(2) {
          transform: translate3d(10px, 0, 0);
          animation: ${glitch.anim1} 2.345s infinite linear alternate;
        }

        &:nth-child(3) {
          transform: translate3d(-10px, 0, 0);
          animation: ${glitch.anim2} 3.234s infinite linear alternate;
        }

        &:nth-child(4) {
          transform: translate3d(0, -5px, 0) scale3d(-1, -1, 1);
          animation: ${glitch.anim3} 2.987s infinite linear alternate;
        }

        &:nth-child(5) {
          animation: ${glitch.flashAnim1} 1.5s steps(1,end) infinite;
        }
      }
    }
  `}
`;

export const NewsContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 2;
  transform: translateY(-10px);

  ${media.tablet`
    padding: 0;
    transform: translateY(0);
  `}
`;

export const Tags = styled.ul`
  display: flex;
  justify-content: flex-start;
  padding: 0;
  margin: 0;
  margin-left: 25px;
  list-style: none;

  ${Tag}:not(:first-child) {
    margin-left: 5px;
  }

  ${media.tablet`
    padding-right: 0;
  `}
`;

export const NewsHeading = styled.header`
  align-self: flex-start;
  max-width: 95%;
  z-index: 2;

  ${media.tablet`
    padding-right: 60px;
    max-width: none;
  `}
`;

export const NewsText = styled.p`
  ${lineClamp(3)};
  margin-left: 25px;
  padding-right: 11px;
  font-family: ${(props) => props.theme.font.primary};
  font-size: 14px;
  line-height: 17px;
  color: ${(props) => props.theme.color.secondary};

  ${media.tablet`
    padding-right: 60px;
  `}
`;

export const NewsDate = styled(NewsText)`
  display: flex;
  flex-grow: 2;
  align-items: flex-end;
  margin: 0;
  margin-left: 25px;
  font-size: 12px;
`;
