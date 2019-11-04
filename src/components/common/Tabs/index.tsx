import React, { useState, Children, cloneElement, useEffect, useRef } from 'react';
import { useSelector } from 'hooks';
import { TabsContainer, TabContainer, Tabs, ActiveTabLine } from './styled';

const TabsMenu: React.FC<TabsProps> = ({ children, onChange, activeTab }) => {
  const [active, setActive] = useState(0);
  const [tabsContainerWidth, setTabsContainerWidth] = useState(0);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const windowWidth = useSelector((state) => state.ui.windowWidth);

  const activeTabId = activeTab || active;

  useEffect(() => {
    if (!tabsContainerRef.current) {
      return;
    }

    setTabsContainerWidth(tabsContainerRef.current.clientWidth);
  }, [windowWidth]);

  const onTabClick = (id: number) => () => {
    setActive(id);

    if (onChange) {
      onChange(id);
    }
  };

  return (
    <TabsContainer ref={tabsContainerRef}>
      <Tabs>
        {Children.map(children, (child, i) => cloneElement(child, {
          onClick: onTabClick(i),
          isactive: i === activeTabId,
        }))}
      </Tabs>
      <ActiveTabLine
        activeId={activeTabId}
        width={`${tabsContainerWidth / Children.count(children)}px`}
      />
    </TabsContainer>
  );
};

export type TabsProps = {
  activeTab?: number;
  onChange?: (id: number) => void;
  children: React.ReactElement[];
};


export const Tab: React.FC<TabProps> = ({ children, ...props }) => {
  return (
    <TabContainer {...props}>
      <span>{children}</span>
    </TabContainer>
  );
};

export type TabProps = {
  isactive?: boolean;
  notification?: boolean;
}

export default {
  Container: TabsMenu,
  Tab,
};
