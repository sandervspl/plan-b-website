import styled, { css } from 'styled-components';
import { Heading, PageContentContainer } from 'common';

export const ApplicationsContainer = styled(PageContentContainer)`
  padding-bottom: 20px;

  h2 {
    padding: 15px 20px 10px;
    text-transform: none;
    font-size: 18px;
  }
`;

export const ApplicationsHeading = styled.div`
  background: ${(props) => props.theme.color.background};
  border-bottom: 1px solid ${(props) => props.theme.color.tab.inactive};

  ${Heading} {
    padding: 25px 20px 20px;
  }
`;

export const TabsContainer = styled.div`
  position: relative;
`;

export const Tab = styled.li<TabProps>`
  width: calc(100vw / 3);
  color: ${(props) => props.theme.color.tab.inactive};
  font-family: ${(props) => props.theme.font.primary};
  text-align: center;
  padding-bottom: 10px;
  cursor: pointer;

  ${(props) => props.isactive && css`
    color: ${(props) => props.theme.color.secondary};
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
`;

type ActiveTabLineProps = {
  activeId: number;
}

export const ApplicationsList = styled.ul`
  margin: 0;
  padding: 0 20px;
  list-style: none;
`;
