import styled from 'styled-components';
import { media } from 'styles/utils';
import { Paragraph } from 'common';
import { AnswerContainer, RecruitmentHeader } from '../styled';

type ImageProps = {
  src: string;
}

export const SpecializationAnswerContainer = styled(AnswerContainer)`
  display: grid;
  grid-template-rows: 15% 70%;
  gap: 2vh;

  ${RecruitmentHeader} {
    margin: 0;
  }

  ${media.tablet`
    grid-template-rows: 15% 1fr;
  `}

  ${media.veryLarge`
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: 100%;
    height: 100%;
    gap: 0;
  `}
`;

export const RoleList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  height: 100%;

  ${media.tablet`
    gap: 50px;
  `}

  ${media.veryLarge`
    gap: 2vh;
  `}
`;

export const BackgroundImage = styled.div<ImageProps>`
  position: relative;
  width: 100%;
  height: 100%;
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
  top: calc(80% - 4vh);
  width: 8vh;
  height: 8vh;
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
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  will-change: color;
  transition: color 300ms ease-in-out;

  ${media.tablet`
    font-size: 30px;
  `}

  ${media.veryLarge`
    font-size: 4.5vh;
  `}
`;

export const ListItem = styled.label`
  display: grid;
  grid-template-rows: 80% 1fr;
  justify-items: center;
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
