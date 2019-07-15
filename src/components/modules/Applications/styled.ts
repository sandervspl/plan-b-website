import styled, { css } from 'styled-components';
import { Heading, PageContentContainer } from 'common';
import { media } from 'styles';

export const ApplicationsContainer = styled(PageContentContainer)`
  padding-bottom: 20px;

  h2 {
    padding: 15px 20px 10px;
    text-transform: none;
    font-size: 18px;

    ${media.tablet`
      padding: 35px 50px 12px;
    `}
  }
`;

export const ApplicationsHeading = styled.div`
  background-color: ${(props) => props.theme.color.background};
  border-bottom: 1px solid ${(props) => props.theme.color.tab.inactive};

  ${Heading} {
    padding: 25px 20px 20px;
  }

  ${media.tablet`
    margin: 0 40px;
    display: flex;
    background: none;

    ${Heading} {
      padding: 45px 0 12px;
      font-size: 35px;
    }
  `}
`;

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
  transition: transform .2s linear;

  ${media.tablet<ActiveTabLineProps>`
    width: 120px;
    transform: translate3d(calc(120px * ${(props) => props.activeId}), 0, 0);
  `}
`;

type ActiveTabLineProps = {
  activeId: number;
}

export const ApplicationsList = styled.ul`
  margin: 0;
  padding: 0 20px;
  list-style: none;

  ${media.tablet`
    padding: 0 40px;
  `}
`;
