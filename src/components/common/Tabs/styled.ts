import styled, { css } from 'styled-components';
import { media } from 'styles';
import { TabProps } from '.';

export const TabsContainer = styled.div`
  position: relative;

  ${media.tablet`
    margin-top: auto;
    margin-left: auto;
  `}
`;

export const TabContainer = styled.li<TabProps>`
  width: calc(100vw / 3);
  color: ${(props) => props.theme.color.tab.inactive};
  font-family: ${(props) => props.theme.font.primary};
  text-align: center;
  padding-bottom: 10px;
  cursor: pointer;

  svg {
    display: none;
  }

  span {
    display: flex;
    position: relative;
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

  ${(props) => props.notification && css`
    > span:after {
      display: block;
      content: '';
      margin-left: 4px;
      width: 5px;
      height: 5px;
      border-radius: 100%;
      background-color: ${(props) => props.theme.color.primary};
    }
  `}
`;

export const Tabs = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ActiveTabLine = styled.span<ActiveTabLineProps>`
  position: absolute;
  /* width: 33vw; */
  width: ${(props) => props.width};
  height: 1px;
  z-index: 1;
  background: white;
  /* transform: translate3d(calc(100vw / 3 * ${(props) => props.activeId}), 0, 0); */
  transform: translate3d(calc(${(props) => props.width} * ${(props) => props.activeId}), 0, 0);
  transition: transform .2s ease-out;

  ${media.tablet<ActiveTabLineProps>`
  `}
`;

type ActiveTabLineProps = {
  activeId: number;
  width: string;
}
