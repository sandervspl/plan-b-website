import styled, { css } from 'styled-components';
import { media } from 'styles';

export const TabsContainer = styled.div`
  position: relative;

  ${media.tablet`
    margin-top: auto;
    margin-left: auto;
  `}
`;

export const Tab = styled.li<TabProps>`
  width: calc(100vw / 3);
  color: ${(props) => props.theme.color.tab.inactive};
  font-family: ${(props) => props.theme.font.primary};
  text-align: center;
  padding-bottom: 10px;
  cursor: pointer;

  svg {
    display: none;
  }

  ${media.tablet`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 20px;
    width: 120px;
    font-size: 16px;

    svg {
      display: block;
      margin-right: 5px;
      width: 20px;
      height: 20px;
      fill: ${(props) => props.theme.color.tab.inactive};
    }
  `}

  ${(props) => props.isactive && css`
    color: ${(props) => props.theme.color.secondary};

    svg {
      fill: ${(props) => props.theme.color.secondary};
    }
  `}
`;

type TabProps = {
  isactive?: boolean;
}

export const Tabs = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ActiveTabLine = styled.span<ActiveTabLineProps>`
  position: absolute;
  width: 33vw;
  height: 1px;
  z-index: 1;
  background: white;
  transform: translate3d(calc(100vw / 3 * ${(props) => props.activeId}), 0, 0);
  transition: transform .2s ease-out;

  ${media.tablet<ActiveTabLineProps>`
    width: ${(props) => props.width};
    transform: translate3d(calc(${(props) => props.width} * ${(props) => props.activeId}), 0, 0);
  `}
`;

type ActiveTabLineProps = {
  activeId: number;
  width: string;
}
