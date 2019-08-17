import styled, { css } from 'styled-components';
import { media } from 'styles';
import { Paragraph } from 'common';

type ImageProps = {
  src: string;
}

export const RoleList = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 85px);
  gap: 15px;
  width: 100%;
  height: 100%;

  ${media.tablet`
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: none;
    gap: 30px;
    position: absolute;
    top: 95px;
    right: 0;
    width: 70%;
    max-height: 440px;

    + button {
      position: absolute;
      bottom: 0;
    }
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
    opacity: .3;
    will-change: opacity;
    transition: opacity 200ms ease-in-out;

    ${media.tablet`
      opacity: .2;
    `}
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
  display: none;

  ${media.tablet<ImageProps>`
    display: block;
    position: absolute;
    top: calc(80% - 25px);
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 1px solid ${(props) => props.theme.color.secondary.dark};
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
  `}
`;

export const RoleText = styled(Paragraph)`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  right: 30px;
  height: auto;
  transform: translateY(-50%);
  color: #FFFFFF;
  font-weight: 600;
  text-transform: uppercase;

  &&& {
    font-size: 30px;
  }

  ${media.tablet`
    bottom: 0;
    top: auto;
    right: 0;
    width: 100%;
    color: ${(props) => props.theme.color.secondary};
    transform: translateY(0);
    will-change: color;
    transition: color 300ms ease-in-out;
  `}
`;

const RoleItemActiveStyle = css`
  ${RoleText} {
    opacity: 1;
    color: ${(props) => props.theme.color.secondary};
  }

  ${BackgroundImage} img {
    transform: scale(1.02);  
  }

  ${BackgroundImage}:after, ${RoleIcon}:after {
    opacity: 0;
  }

  ${RoleIcon} {
    border: 1px solid ${(props) => props.theme.color.secondary};
  }
`;

export const RoleItem = styled.label<RoleItemProps>`
  position: relative;
  overflow: hidden;
  cursor: pointer;

  ${media.tablet`
    display: grid;
    grid-template-rows: 80% 1fr;
    justify-items: center;
  `}

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
      border-color: ${(props) => props.theme.color.secondary};
    }

    ${RoleItemActiveStyle};
  `}

  &:hover {
    ${RoleItemActiveStyle};
  }

  input {
    display: none;

    &:focus, + ${RoleIcon}:focus {
      outline: 0;
    }

    &:focus + ${RoleIcon} {
      box-shadow: 0 0 2px 3px #0099E0;
    }
  }
`;

type RoleItemProps = {
  checked?: boolean;
  unchecked?: boolean;
}
