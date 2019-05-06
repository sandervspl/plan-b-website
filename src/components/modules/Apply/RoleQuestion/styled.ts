import styled, { css } from 'styled-components';
import { media } from 'styles/utils';
import { Paragraph } from 'common';

type ImageProps = {
  src: string;
}

export const RoleList = styled.div`
  position: absolute;
  top: 95px;
  right: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 70%;
  height: 100%;
  max-height: 440px;

  ${media.tablet`
    gap: 30px;
  `}

  ${media.veryLarge`
    max-height: 500px;
  `}
`;

export const BackgroundImage = styled.figure`
  display: flex;
  justify-content: center;
  position: relative;
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border: 1px solid transparent;
  will-change: border-color;
  transition: border-color 200ms ease-in-out;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: black;
    opacity: .2;
    will-change: opacity;
    transition: opacity 200ms ease-in-out;
  }

  img {
    width: 100%;
    object-fit: cover;
    transform: scale(1);
    will-change: transform;
    transition: transform 200ms ease-in-out;
  }
`;

export const RoleIcon = styled.div<ImageProps>`
  position: absolute;
  top: calc(80% - 25px);
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 1px solid ${(props) => props.theme.color.border.light};
  background: url(${(props) => props.src}) center center;
  background-size: cover;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: black;
    opacity: .2;
    border-radius: 100%;
    will-change: opacity;
    transition: opacity 200ms ease-in-out;
  }
`;

export const RoleText = styled(Paragraph)`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
  color: ${(props) => props.theme.color.paragraph};
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  will-change: color;
  transition: color 300ms ease-in-out;

  ${media.tablet`
    font-size: 30px;
  `}
`;

const RoleItemActiveStyle = css`
  ${RoleText} {
    opacity: 1;
    color: ${(props) => props.theme.color.highlight};
  }

  ${BackgroundImage} img {
    transform: scale(1.02);  
  }

  ${BackgroundImage}:after, ${RoleIcon}:after {
    opacity: 0;
  }
`;

export const RoleItem = styled.label<RoleItemProps>`
  display: grid;
  grid-template-rows: 80% 1fr;
  justify-items: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  ${(props) => props.unchecked && css`
    ${RoleText} {
      opacity: .5;
    }

    ${BackgroundImage}:after, ${RoleIcon}:after {
      opacity: .5;
    }
  `}

  ${(props) => props.checked && css`
    ${BackgroundImage} {
      border-color: ${(props) => props.theme.color.border.light};
    }

    ${RoleItemActiveStyle}
  `}

  &:hover {
    ${RoleItemActiveStyle}
  }

  input {
    display: none;
  }
`;

type RoleItemProps = {
  checked?: boolean;
  unchecked?: boolean;
}
