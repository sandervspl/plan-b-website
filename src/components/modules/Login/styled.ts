import styled from 'styled-components';
import tinycolor from 'tinycolor2';
import DiscordLogoSvg from 'vectors/discord-logo-white.svg';
import { ParagraphStyle } from 'common';
import { media } from 'styles';
import { GlitchContainer } from 'common/Glitch/styled';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto 0;
  padding: 30px 20px;
  max-width: 400px;
  height: calc(100vh - 128px);

  small {
    ${ParagraphStyle};
    margin-top: 15px;
    margin-right: auto;
    font-size: 14px;
    color: ${(props) => props.theme.color.secondary.darker};
  }

  ${GlitchContainer} {
    display: block;
    position: relative;
    top: 0;
    left: 0;
    margin-bottom: 40px;
    width: 100%;
    height: 150px;

    ${media.tablet`
      height: 200px;
    `}
  }
  
  ${media.tablet`
    justify-content: center;
    margin: 0 auto;
    padding: 50px 40px;
    height: auto;
    background-color: ${(props) => props.theme.color.background.content};
    box-shadow: ${(props) => props.theme.shadow.content};
  `}
`;

export const Button = styled.button`
  ${ParagraphStyle};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 0;
  outline: 0;
  border-radius: 3px;
  cursor: pointer;
  background-color: ${(props) => props.theme.color.discord};
  transition: .1s background-color;

  &:hover {
    background-color: ${(props) => tinycolor(props.theme.color.discord).darken(5).toString()};
  }

  ${media.tablet`
    padding: 13px;
  `}
`;

export const DiscordLogo = styled(DiscordLogoSvg)`
  margin-right: 10px;
  height: 24px;
`;
