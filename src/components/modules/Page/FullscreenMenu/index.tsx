import * as i from 'types';
import React, { useEffect, useRef } from 'react';
import { navigationMenu } from 'services';
import useBgAnim from './useBgAnim';
import { FullscreenMenuContainer, MenuItems, LinkContainer, MenuLink, Background } from './styled';

const FullscreenMenu: React.FC<Props> = (props) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const { generateAnim, startAnims, generated } = useBgAnim();

  useEffect(() => {
    generateAnim();
  }, [!generated]);

  useEffect(() => {
    if (props.active) {
      startAnims();
    }
  }, [props.active]);

  return (
    <>
      <FullscreenMenuContainer ref={overlayRef} {...props}>
        <MenuItems {...props}>
          {navigationMenu.items.map((item, i) => (
            <LinkContainer key={i}>
              <Background className={`link-bg link-bg-${i}`} />
              <MenuLink
                to={item.page}
                num={i}
                {...props}
              >
                {item.label}
              </MenuLink>
            </LinkContainer>
          ))}
        </MenuItems>
      </FullscreenMenuContainer>
    </>
  );
};

type Props = i.VisibilityProps & {
  active: boolean;
}

export default FullscreenMenu;
