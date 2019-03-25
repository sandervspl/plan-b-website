import styled from 'styled-components';
import { Paragraph } from 'common';

type ImageProps = {
  src: string;
}

export const SpecializationSelectContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const RoleList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  height: 100%;
`;

export const BackgroundImage = styled.div<ImageProps>`
  position: absolute;
  width: 100%;
  height: 80%;
  transform: scale(1);
  background: url(${(props) => props.src}) center center;
  background-size: cover;
  will-change: transform;
  transition: transform 200ms ease-in-out;

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
`;

export const RoleIcon = styled.div<ImageProps>`
  position: absolute;
  top: calc(80% - 30px);
  width: 60px;
  height: 60px;
  border-radius: 100%;
  border: 2px solid black;
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
  font-size: 30px;
  font-weight: 600;
  text-transform: uppercase;
  will-change: color;
  transition: color 300ms ease-in-out;
`;

export const ListItem = styled.label`
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    ${RoleText} {
      color: ${(props) => props.theme.color.highlight};
    }

    ${BackgroundImage} {
      transform: scale(1.02);  
    }

    ${BackgroundImage}:after, ${RoleIcon}:after {
      opacity: 0;
    }
  }

  input {
    display: none;
  }
`;
