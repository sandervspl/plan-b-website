import * as i from 'types';
import React, { useEffect, useRef } from 'react';
import { navigationMenu } from 'services';
import useBgAnim from './useBgAnim';
import {
  FullscreenMenuContainer, MenuItems, LinkContainer, Background, MenuExternalLink, MenuClientLink,
} from './styled';

const FullscreenMenu: React.FC<Props> = (props) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const { generateAnim, startAnims, generated } = useBgAnim();

  useEffect(() => {
    generateAnim();
  }, [!generated]);

  useEffect(() => {
    if (props.isActive) {
      startAnims();
    }
  }, [props.isActive]);

  return (
    <>
      <FullscreenMenuContainer ref={overlayRef} {...props}>
        <a href="www.google.nl">test</a>
        <MenuItems {...props}>
          {navigationMenu.items.map((item, i) => (
            <LinkContainer key={i}>
              <Background className={`link-bg link-bg-${i}`} />
              {item.external ? (
                <MenuExternalLink href={item.page} num={i} {...props}>
                  {item.label}
                </MenuExternalLink>
              ) : (
                <MenuClientLink to={item.page} num={i} {...props}>
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
