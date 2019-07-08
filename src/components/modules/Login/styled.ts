import styled from 'styled-components';
import DiscordLogoSvg from 'vectors/discord-logo.svg';
import { Paragraph, ParagraphStyle } from 'common';
import { media } from 'styles';
import { GlitchContainer } from 'common/Glitch/styled';

export const LoginContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 25px 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  ${media.tablet`
    max-width: ${(props) => props.theme.width.login};
    margin: 0 auto;
  `}

  a {
    width: 100%;
  }

  ${Paragraph} {
    text-align: center;
    margin-bottom: 20px;
    font-size: 16px;
  }

  small {
    ${ParagraphStyle};
    margin-top: 20px;
    font-size: 12px;
    text-align: center;
  }

  ${GlitchContainer} {
    display: block;
    position: relative;
    top: 0;
    left: 0;
    margin-bottom: 20px;
    width: 100%;
    height: 105px;

    ${media.tablet`
      margin-bottom: 30px;
      height: 200px;
    `}
  }
`;

export const Heading = styled.h1`
  color: ${(props) => props.theme.color.primary};
  margin-bottom: 20px;
  text-transform: uppercase;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  height: 37px;
  padding: 0 18px;
  line-height: 37px;
  font-size: 17px;
  color: ${(props) => props.theme.color.secondary};
  border: 1px solid rgba(255, 255, 255, .15);
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  background-color: ${(props) => props.theme.color.background};
  font-family: ${(props) => props.theme.font.primary};
  transition: .1s border-color;

  &:hover {
    border-color: rgba(255, 255, 255, .54);
  }
`;

export const DiscordLogo = styled(DiscordLogoSvg)`
  display: inline-block;
  margin-right: 4px;
  height: 25px;
  line-height: 25px;
`;
