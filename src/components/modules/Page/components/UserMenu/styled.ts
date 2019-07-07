import styled, { css } from 'styled-components';
import { Paragraph, ParagraphStyle } from 'common';
import { media } from 'styles';

export const UserMenuContainer = styled.div<UserMenuContainerProps>`
  left: 0;
  position: fixed;
  z-index: 2;
  top: 113px;
  width: 100%;
  height: 100%;

  background: ${(props) => props.theme.color.background};
	border-top: 1px solid ${(props) => props.theme.color.border.primary.light};
  color: ${(props) => props.theme.color.secondary};
  opacity: 0;
  visibility: hidden;
  transition: transform .2s ease-in-out, opacity .2s ease-in-out, visibility 0s .2s;

  ${(props) => props.open && css`
    opacity: 1;
    visibility: visible;
    transform: translate3d(0, 10px, 0);
    transition: transform .2s ease-in-out, opacity .2s ease-in-out, visibility 0s;
  `}

  &::before,
  &::after {
    bottom: 100%;
    right: 33px;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  &::before {
    border-color: rgba(51, 51, 51, 0);
    border-bottom-color: ${(props) => props.theme.color.border.primary.light};
    border-width: 8px;
    margin-left: -8px;
  }

  &::after {
    border-color: rgba(24, 24, 24, 0);
    border-bottom-color: ${(props) => props.theme.color.background};
    border-width: 7px;
    margin-left: -7px;
  }

  ${media.tablet`
    position: absolute;
    z-index: 1;
    top: auto;
    left: -16px;
    width: 220px;
    height: auto;
    border: 1px solid ${(props) => props.theme.color.border.primary.light};

    &::before,
    &::after {
      left: 50%;
    }
  `}
`;

type UserMenuContainerProps = {
  open?: boolean;
}

export const UserInfo = styled.div`
  display: flex;
  padding: 20px 25px;

  img {
    margin-right: 15px;
    width: 55px;
    height: 55px;
  }

  ${Paragraph} {
    font-size: 16px;
    line-height: 24px;

    &:first-child {
      font-weight: bold;
    }
  }
`;

export const Line = styled.hr`
  margin: 0;
  border: 1px solid ${(props) => props.theme.color.border.primary.light};
`;

export const OptionsContainer = styled.ul`
  margin: 0;
  padding: 20px 25px;
  list-style: none;

  li, button {
    ${ParagraphStyle};
    color: ${(props) => props.theme.color.secondary};
    font-size: 16px;
    cursor: pointer;
  }

  button {
    appearance: none;
    background: none;
    border: 0;
    outline: 0;
  }
`;
