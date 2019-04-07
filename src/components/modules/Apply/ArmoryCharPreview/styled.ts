import styled, { css } from 'styled-components';
import { media } from 'styles/utils';
import { Header, Paragraph } from 'common';
import LoaderSvg from './loader.svg';

export const ArmoryCharPreviewContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5vh;
  width: 100%;
`;

export const ImageContainer = styled.img`
  width: 100%;

  ${media.tablet`
    width: 70px;
  `}
`;

export const ArmoryCharacter = styled.label`
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 10px;
  position: relative;
  padding: 10px;
  width: 100%;
  background: ${(props) => props.theme.color.secondary};
  cursor: pointer;
  will-change: transform, background;
  transition: background 100ms linear,
              transform 300ms ${(props) => props.theme.easing.easeInOutCirc};
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${(props) => props.theme.color.primary};
    transform-origin: left;
    transform: scaleX(0);
    will-change: transform;
    transition: transform 300ms ${(props) => props.theme.easing.easeInOutCirc};
  }

  &:hover {
    background: ${(props) => props.theme.color.secondary.hover};
    transform: scale(1.01);

    &:after {
      transform: scaleX(1);
    }
  }

  ${media.tablet`
    grid-template-columns: 70px 1fr;
    gap: 4vh;
    padding: 15px 30px;
  `}

  input {
    display: none;
  }
`;

export const Loader = styled(LoaderSvg)`
  justify-self: center;
  height: 12px;
  width: 53px;

  ${media.tablet`
    width: 100px;
  `}
`;

export const Name = styled(Header)`
  text-transform: none;
  font-size: 18px;

  ${media.tablet`
    font-size: 30px;
  `}

  span {
    margin-right: 10px;
    font-weight: 100;
    color: ${(props) => props.theme.color.paragraph};
  }
`;

export const Guild = styled(Paragraph)`
  text-transform: none;
  font-size: 14px;

  ${media.tablet`
    font-size: 20px;
  `}
`;
