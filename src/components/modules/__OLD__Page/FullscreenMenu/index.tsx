import * as i from 'types';
import React, { useEffect, useRef } from 'react';
import { navigationMenu } from 'services';
import useBgAnim from './useBgAnim';
import {
  FullscreenMenuContainer, MenuItems, LinkContainer, Background, MenuExternalLink, MenuClientLink,
} from './styled';

const FullscreenMenu: React.FC<Props> = ({ isActive, ...props }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const { generateAnim, startAnims, generated } = useBgAnim();

  useEffect(() => {
    generateAnim();
  }, [!generated]);

  useEffect(() => {
    if (isActive) {
      startAnims();
    }
  }, [isActive]);

  return (
    <>
      <FullscreenMenuContainer ref={overlayRef} isActive={isActive} {...props}>
        <a href="www.google.nl">test</a>
        <MenuItems isActive={isActive} {...props}>
          {navigationMenu.__OLD__items.map((item, i) => (
            <LinkContainer key={i}>
              <Background className={`link-bg link-bg-${i}`} />
              {item.external ? (
                <MenuExternalLink href={item.page} num={i} isActive={isActive} {...props}>
                  {item.label}
                </MenuExternalLink>
              ) : (
                <MenuClientLink to={item.page} num={i} isActive={isActive} {...props}>
                  {item.label}
                </MenuClientLink>
              )}
            </LinkContainer>
          ))}
        </MenuItems>
      </FullscreenMenuContainer>
    </>
  );
};

type Props = i.VisibilityProps & {
  isActive: boolean;
}

export default FullscreenMenu;
