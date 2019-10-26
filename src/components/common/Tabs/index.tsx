import React, { useState, Children, cloneElement, useEffect, useRef } from 'react';
import { useSelector } from 'hooks';
import { TabsContainer, Tab, Tabs, ActiveTabLine } from './styled';

const TabsMenu: React.FC<TabsProps> = ({ children, onChange }) => {
  const [active, setActive] = useState(0);
  const [tabsContainerWidth, setTabsContainerWidth] = useState(0);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const windowWidth = useSelector((state) => state.ui.windowWidth);

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
          isactive: i === active,
        }))}
      </Tabs>
      <ActiveTabLine
        activeId={active}
        width={`${tabsContainerWidth / Children.count(children)}px`}
      />
    </TabsContainer>
  );
};

export type TabsProps = {
  onChange?: (id: number) => void;
  children: React.ReactElement[];
};

export default {
  Container: TabsMenu,
  Tab,
};
